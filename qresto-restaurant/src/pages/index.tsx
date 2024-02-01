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


    // UseEffect que setean cookies al cambiar los UseState correspondientes
    useEffect(() => {
        setCookie("restaurantId", rid)
    }, [rid]);
    useEffect(() => {
        setCookie("userRole", userRole)
    }, [userRole]);

    // useEffect(() => {
    //     if (router.asPath === '/') {
    //         router.replace('/orders');
    //     }
    // }, []);

    const singIn = async (user) => {
        // Request login
        const result = await loginRestaurant(user)
        // If authenticated, save rid, userRole and redirect
        if(result.length == 1){
            // Guardar en el use state el usuario
            setCookie("restaurantId", result[0].restaurant)
            setCookie("userRole", result[0].role)

            setUserLogin(result[0])
            setRid(result[0].restaurant)
            setUserRole(result[0].role)
            console.log(getCookie("restaurantId"))
            console.log(getCookie("userRole"))
            await router.replace({pathname: "/tables/",})

        } else {
            console.log("User not authenticated")
        }
    }

    return (<>
        <Login onSignInSubmit={singIn}/>
    </>)
}
