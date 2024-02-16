import { useRouter } from 'next/router'
import { Login } from '@/Restaurant/Login/Login'
import {loginRestaurant} from "@/requests";
import {useEffect, useState} from "react";
import {getCookie, setCookie} from "cookies-next";


export default function Home() {
    const [rid, setRid] = useState()
    const router = useRouter()
    const [userLogin, setUserLogin] = useState()
    const [userRole, setUserRole] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        console.log(' ')
        console.log('Home useEffect userRole rid')
        console.log('userRole: ', userRole)
        console.log('rid: ', rid)

        if(userRole !== undefined && rid !== undefined){
            setCookie("userRole", userRole)
            setCookie("restaurantId", rid)
            router.replace({
                pathname: "/tables/",
                query: userRole
            })
        }
    }, [userRole, rid]);

    const singIn = async (user) => {
        console.log(' ')
        console.log('Home singIn(user)')
        console.log('user: ', user)
        // Request login
        const result = await loginRestaurant(user)
        // If authenticated, save rid, userRole and redirect
        console.log('result: ', result)
        if(result.length == 1){
            // Guardar en el use state el usuario
            setCookie("restaurantId", result[0].restaurant)
            setCookie("userRole", result[0].role)

            setUserLogin(result[0])
            setRid(result[0].restaurant)
            setUserRole(result[0].role)

            console.log(getCookie("restaurantId"))
            console.log(getCookie("userRole"))
            setError(false)
        } else {
            console.log("User not authenticated")
            setError(true)
        }
    }

    return (<>
        <Login 
            error={error}
            onSignInSubmit={singIn}/>
    </>)
}
