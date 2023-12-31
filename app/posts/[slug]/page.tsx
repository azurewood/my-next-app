import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from "next/head";

const YourComponent = () => (
  <Image
    src="/images/profile.png" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function FirstPost({params}:any) {
    return (
      <>
        <h1>Another Post</h1>
        <YourComponent />
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <p>{params.slug}</p>
      </>
    );
  }