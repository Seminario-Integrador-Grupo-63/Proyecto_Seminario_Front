import Head from 'next/head'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
import { Login } from '@/Restaurant/Login/Login'

export default function Home() {
    const router = useRouter()

    // useEffect(() => {
    //     if (router.asPath === '/') {
    //         router.replace('/orders');
    //     }
    // }, []);

    return (<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login/>
    </>)
}
