import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Component } from '@/components/Component/Component'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getQRRequest } from './api/requests'
import {useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const router = useRouter()
    const [qrImage, setQRImage] = useState(null);

    const getQR = async () => {
        console.log("getQR")
        const response = await getQRRequest()
        console.log("response: ", response)
        setQRImage(response.data);
        // console.log('Placing your order')
        // router.push('/product')
    }

    return (<>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Welcome Home</h1>
                {/* <Link href='/blog'>
                    <a>Blog aaafs</a>
                </Link> */}
                <button onClick={getQR}>Get QR</button>
                <div>
                    {/* Render the QR image if available */}
                    {/* {qrImage && <img src={qrImage} alt="QR Code" />} */}
                    {qrImage && <img src={`data:image/png;base64,${qrImage}`} alt="QR Code" />}
                </div>
            </div>
        </main>
    </>)
}
/**
console.log(" ")
console.log("Home")
console.log(": ", )
*/