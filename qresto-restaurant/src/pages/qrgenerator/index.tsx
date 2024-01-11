import { useRouter } from 'next/router'
import { getQR as getQRRequest} from '@/requests'
import {useState, useEffect} from 'react'
import { QRGenerator } from '@/Restaurant/Tables/QRGenerator/QRGenerator'

export default function QRGeneratorPage() {
    const router = useRouter()
    const [qrImage, setQRImage] = useState(Array)

    const getQR = async () => {
        const response = await getQRRequest()
        setQRImage([response.data])
    }

    useEffect(() => {
        getQR()
    }, [])
    
    return (<>
        <QRGenerator qrcodes={qrImage}/>
    </>)
}
