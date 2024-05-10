import Head from 'next/head';
import WelcomeScreen from '@/components/WelcomeScreen';
import SignUpPage from './sign-up';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>RuMate</title>
        <meta content='Generated by create next app' name='description' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      {isLoading ? <WelcomeScreen /> : <SignUpPage />}
    </>
  );
}
