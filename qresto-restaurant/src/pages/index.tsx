import { useRouter } from 'next/router'
import { Login } from '@/Restaurant/Login/Login'
import {loginRestaurant} from "@/requests";
import {useState} from "react";

export const [rid, setRId] = useState(null)

export default function Home() {
    const router = useRouter()
    const [userLogin, setUserLogin] = useState(null)


    // useEffect(() => {
    //     if (router.asPath === '/') {
    //         router.replace('/orders');
    //     }
    // }, []);

    const singIn = async (user) => {
        const result = await loginRestaurant(user)
        // Guardar en el use state el resultado
        setUserLogin(result)
        // Pendiente bloquear urls
        if(userLogin != null){
            setRId(userLogin.restaurantId)
            await router.replace({pathname: "/tables/", query: {restaurantId: user.restaurantId}})

            /*if(userLogin.role == "admin"){
                await router.replace({
                    pathname: "/users",
                })
            }
            if(userLogin.role == "employee"){
                await router.replace({
                    pathname: "/orders",
                })
            }*/
        }
    }

    return (<>
        <Login onSignInSubmit={singIn}/>
    </>)
}
