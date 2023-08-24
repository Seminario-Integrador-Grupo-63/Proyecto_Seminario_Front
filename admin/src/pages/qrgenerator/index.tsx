import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import { Component } from '@/components/Component/Component'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getQRRequest } from '../api/requests'
import {useState, useEffect} from 'react'
import { QRGenerator } from '@/components/QRGenerator/QRGenerator'

const inter = Inter({ subsets: ['latin'] })

export default function QRGeneratorPage() {
    const router = useRouter()
    const [qrImage, setQRImage] = useState(Array);

    const getQR = async () => {
        const response = await getQRRequest()
        setQRImage([response.data]);

    }

    useEffect(() => {
        getQR()
    }, [])
    

    return (<>
        <QRGenerator qrcodes={qrImage}/>
    </>)
}
/**
console.log(" ")
console.log("Home")
console.log(": ", )
*/
