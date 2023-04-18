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
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
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
      <div className='flex flex-col items-center'>
        <div className='bg-dk-blue w-[150px] h-[75px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-end pb-1'>
          {selectedCharacter}
        </div>
        <Combobox value={selectedCharacter} onChange={setSelectedCharacter}>
          <div className='overflow-hidden'>
            <Combobox.Input
              onChange={(event) => setQuery(event.target.value)}
              className='overflow-hidden bg-black w-[125px] h-[50px] border-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-center -translate-y-[90px]'
            />

            <Combobox.Button className='absolute flex translate-x-[40px]'>
              <ChevronDown className='h-5 w-5 text-white' aria-hidden='true' />
            </Combobox.Button>
            <Combobox.Options>
              {filteredCharacter.map((character) => (
                <Combobox.Option
                  key={character}
                  value={character}
                  className=' bg-black w-[125px] h-[40px] border-y-[0.5px] border-x-2 border-md-gray rounded-sm text-white text-center flex flex-col justify-center -translate-y-[90px]'
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
