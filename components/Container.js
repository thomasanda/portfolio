import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from './Navbar'

export default function Container({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Thomas Anda - Developer, Musician and Composer',
    description: 'Former musician turned software developer!',
    image: '/avatar.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta name='description' content={meta.description} />
        <meta
          property='og:url'
          content={`https://thomasanda.no/${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://thomasanda.no/${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Thomas Anda' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@anda_thomas' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main>
        <Navbar />
        <div>{children}</div>
      </main>
    </div>
  );
};
