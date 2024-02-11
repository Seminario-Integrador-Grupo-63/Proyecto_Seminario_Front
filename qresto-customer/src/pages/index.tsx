import {useEffect} from 'react';
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {deleteCookie, getCookie, hasCookie, setCookie} from "cookies-next";
import {Typography} from "@mui/material";

export default function Home() {
    const router = useRouter()
    const searchParams = useSearchParams()


    useEffect(() => {
        // Recupera el tableCode del parámetro
        if (searchParams.has("table-code")) {
            if (hasCookie("tableCode")) {
                deleteCookie("tableCode")
            }
            const tc = searchParams.get('table-code')
            setCookie("tableCode", tc, {maxAge: 60*60*2})
        }

        // Si se guardó correctamente, redirige a la página de inicio
        if (hasCookie("tableCode")) {
            router.replace({pathname: '/start'})
        }
    }, [searchParams])


    return <>
        <Typography>
            Escanee el QR de su mesa
        </Typography>
    </>
}
