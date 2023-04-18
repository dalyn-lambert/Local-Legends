'use client';

import { Combobox } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'react-feather';

type CharacterCardProps = { flag: string };

const CharacterCard = ({ flag }: CharacterCardProps) => {
  const characters: string[] = [
    'Bowser',
    'Captain Falcon',
    'Donkey Kong',
    'Dr. Mario',
    'Falco',
    'Fox',
    'Ganondorf',
    'Ice Climbers',
    'Jigglypuff',
    'Kirby',
    'Link',
    'Luigi',
    'Mario',
    'Marth',
    'Mewtwo',
    'Mr. Game & Watch',
    'Ness',
    'Peach',
    'Pichu',
    'Pikachu',
    'Roy',
    'Samus',
    'Yoshi',
    'Young Link',
    'Zelda',
  ];
  const [selectedCharacter, setSelectedCharacter] = useState('Fox');
  const [query, setQuery] = useState('');

  const filteredCharacter =
    query === ''
      ? characters
      : characters.filter((character) => {
          return character.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className='hover:drop-shadow-2xl shadow-dk-purple bg-dk-gray w-[175px] h-[275px] mb-4 border-4 border-md-gray rounded flex flex-col gap-2 items-center'>
      <div className='absolute w-[75px] h-[25px] bg-yellow drop-shadow-lg rounded shadow-dk-yellow text-xs text-black text-center flex flex-col justify-center -translate-y-2 -translate-x-14'>
        {flag}
      </div>
      <Image
        src={`/assets/portraits/${selectedCharacter}.png`}
        width={100}
        height={100}
        alt={`Portrait of
      ${selectedCharacter}`}
        className='pt-8 translate-x-[34px]'
      />

      <div className='z-10 bg-dk-blue w-[150px] h-[75px] border-2 border-md-gray rounded-sm pb-1'>
        <Combobox value={selectedCharacter} onChange={setSelectedCharacter}>
          <div className='bg-black w-[125px] h-[50px] border-2 border-md-gray rounded-sm text-white text-sm items-center flex flex-col justify-center -translate-y-[20px] translate-x-[10px]'>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className='bg-black text-center w-[121px]'
            />
            <Combobox.Button className=''>
              <ChevronDown className='h-5 w-5 text-white' aria-hidden='true' />
            </Combobox.Button>
          </div>
          <div className='z-20 bg-dk-blue'>
            <Combobox.Options className='h-[90px] pt-1 overflow-y-scroll scrollbar-none -translate-y-[15px] translate-x-[10px]'>
              {filteredCharacter.map((character) => (
                <Combobox.Option
                  key={character}
                  value={character}
                  className='cursor-pointer bg-dk-blue w-[125px] h-[30px] border-y-[0.5px] border-md-gray rounded-sm text-sm text-white text-center flex flex-col justify-center -translate-y-[100px] '
                >
                  {character}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default CharacterCard;
