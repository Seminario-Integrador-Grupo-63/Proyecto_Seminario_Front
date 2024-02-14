import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {deleteCookie, getCookie, hasCookie, setCookie} from "cookies-next";
import {Typography} from "@mui/material";

export default function Home() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [pushedStart, setPushedStart] = useState(false)

//     useEffect(() => {
//         console.log(' ')
//         console.log('Home useEffect')
        
//         // Redirection conditionals
//         if (searchParams.has("table-code")) {
//             if (hasCookie("tableCode")) {
//                 deleteCookie("tableCode")
//             }
//             const tc = searchParams.get("table-code")
//             console.log('tc: ', tc)
//             setCookie("tableCode", tc, {maxAge: 60*60*3})
//         } else if (hasCookie("tableCode") && getCookie("tableCode") != "") {
//             router.replace({pathname:"/start"})
//         }


// /*        // Si se guardó correctamente, redirige a la página de inicio
//         if (hasCookie("tableCode")) {
//             if(!pushedStart){
//                 router.push({pathname: '/start'})
//                 setPushedStart(true)
//             }
//         }*/
//     }, [searchParams])



    useEffect(() => {
        console.log(' ')
        console.log('Home useEffect')
        let hasCookieResult = hasCookie("tableCode")
        let cookie = getCookie("tableCode")
        console.log('hasCookieResult: ', hasCookieResult)
        console.log('cookie: ', cookie)
        // Redirection conditionals
        if (searchParams.has("table-code")) {
            if (hasCookie("tableCode")) {
                deleteCookie("tableCode")
            }
            const tc = searchParams.get("table-code")
            console.log('tc: ', tc)
            setCookie("tableCode", tc, {maxAge: 60*60*3})
        } else if (hasCookie("tableCode") && getCookie("tableCode") != "") {
            router.replace({pathname:"/start"})
        }


    /*        // Si se guardó correctamente, redirige a la página de inicio
        if (hasCookie("tableCode")) {
            if(!pushedStart){
                router.push({pathname: '/start'})
                setPushedStart(true)
            }
        }*/
    }, [searchParams])




    return <>
        <Typography>
            Escanee el QR de su mesa
        </Typography>
    </>
}
