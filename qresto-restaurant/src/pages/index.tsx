import { useRouter } from 'next/router'
import { Login } from '@/Restaurant/Login/Login'
import {loginRestaurant} from "@/requests";
import {useState} from "react";
import {setCookie} from "@/pages/api/utils";


export default function Home() {
    const [rid, setRId] = useState(null)
    const router = useRouter()
    const [userLogin, setUserLogin] = useState(null)
    const [userRole, setUserRole] = useState()


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
            setRId(result[0].restaurantId)
            setUserRole(result[0].role)
            setCookie("restaurantId", rid)
            setCookie("userRole", userRole)
            await router.replace({pathname: "/tables/", query: {restaurantId: user.restaurantId}})

        } else {
            console.log("User not authenticated")
        }
    }

    return (<>
        <Login onSignInSubmit={singIn}/>
    </>)
}
