import { useRouter } from 'next/router'
import { Login } from '@/Restaurant/Login/Login'
import {loginRestaurant} from "@/requests";
import {useState} from "react";
import {setCookie} from "@/pages/api/utils";


export default function Home() {
    const [rid, setRId] = useState(null)
    const router = useRouter()
    const [userLogin, setUserLogin] = useState(null)


    // useEffect(() => {
    //     if (router.asPath === '/') {
    //         router.replace('/orders');
    //     }
    // }, []);

    const singIn = async (user) => {
        const result = await loginRestaurant(user)
        // Pendiente bloquear urls
        if(result.length == 1){
            // Guardar en el use state el usuario
            setUserLogin(result[0])
            setRId(userLogin.restaurantId)
            setCookie("restaurantId", rid)
            await router.replace({pathname: "/tables/", query: {restaurantId: user.restaurantId}})

        } else {
            // Mensaje de error o algo
        }
    }

    return (<>
        <Login onSignInSubmit={singIn}/>
    </>)
}
