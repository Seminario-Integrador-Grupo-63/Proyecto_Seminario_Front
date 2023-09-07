import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getQRRequest } from './api/requests'
import {useState} from 'react'
import { NameInput } from '@/Customer/NameInput/NameInput'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()

    return (<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <div>
                <NameInput/>
            </div>
        </main>
    </>)
}
/**
console.log(" ")
console.log("Home")
console.log(": ", )
*/