import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getQRRequest } from '../api/requests'
import {useState, useEffect} from 'react'
import { Orders } from '@/Restaurant/Orders/Orders'

const inter = Inter({ subsets: ['latin'] })

export default function QRGeneratorPage() {
    const router = useRouter()

    useEffect(() => {

    }, [])
    
    return (<>
        <Orders/>
    </>)
}
/**
console.log(" ")
console.log("Home")
console.log(": ", )
*/
