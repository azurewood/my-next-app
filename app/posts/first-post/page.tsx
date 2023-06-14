'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const YourComponent = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function FirstPost() {
  const { data, error, isLoading } = useSWR('https://rickandmortyapi.com/api/character/?page=19', fetcher);

  if (error)
    return (
      <h2>{error}</h2>

    );

  return (
    <>
      <h1>First Post</h1>
      <YourComponent />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>


      <p>{isLoading ? "Loading..." : <p>
        {data.results.map((character: any) => {
          return <p key={character.id}>{character.name}</p>
        })}
      </p>}</p>
    </>
  );
}