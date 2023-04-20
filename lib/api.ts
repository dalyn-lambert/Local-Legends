import { User } from '@prisma/client';

type FetcherProps = {
  url: string;
  method: string;
  body: Partial<User>;
  json?: boolean;
};

const fetcher = async ({ url, method, body, json = true }: FetcherProps) => {
  const res = await fetch(url, {
    method,
    body: body && JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error('API Error');
  }

  if (json) {
    const data = await res.json();
    return data;
  }
};

export const signin = async (user: User) => {
  console.log('sign in function here');
  return fetcher({
    url: 'api/signin',
    method: 'POST',
    body: user,
    json: false,
  });
};
