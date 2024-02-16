import {useEffect, useState} from 'react';
import { useRouter } from 'next/router'
import { useSearchParams} from 'next/navigation'
import {deleteCookie, getCookie, hasCookie, setCookie} from "cookies-next";
import {Typography} from "@mui/material";
import { getTableOrders, postCustomer } from '@/requests';

export default function Home() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        console.log(' ')
        console.log('/ useEffect searchParams')
        initialize()
    }, [searchParams])

    const goToStart = () => {
        router.replace({pathname:"/start"})
    }

    const initialize = () => {
        console.log(' ')
        console.log('/ initialize()')
        
        let hasTableCodeCookie = hasCookie("tableCode")
        let urlHasTableCode = searchParams.has("table-code")

        console.log('urlHasTableCode: ', urlHasTableCode)
        console.log('hasTableCodeCookie: ', hasTableCodeCookie)

        if(hasTableCodeCookie){
            if(!urlHasTableCode){
                let tableCode = getCookie("tableCode")
                console.log('tableCode: ', tableCode)
                if(tableCode !== ''){
                    goToStart()
                    return true
                }
            } else {
                const tc = searchParams.get("table-code")
                console.log('tc: ', tc)
                setCookie("tableCode", tc, {maxAge: 60*60*3})
                goToStart()
            }
        }
    }

    return <>
        <Typography>
            Escanee el QR de su mesa
        </Typography>
    </>
}
