import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import {useEffect} from 'react'
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
