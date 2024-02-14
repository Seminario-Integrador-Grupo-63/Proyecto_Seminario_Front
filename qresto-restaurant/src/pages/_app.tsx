//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/Restaurant/Layout/Layout'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";
/*
import { getCookie, setCookie, deleteCookie } from 'qresto-components/src/pages/api/utils';
*/


export default function App({ Component, pageProps, router }: AppProps) {
    // console.log(' ')
    // console.log('_app')
    // UseState con el id de Restaurant y rol de usuario
    const [rid, setRid] = useState(null);
    const [role, setRole] = useState(null);
    // const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    // Función que lee los RId y Role desde el localStorage
     function readUser() {
         const restaurantId = getCookie("restaurantId")
         const userRol = getCookie("UserRole")
         if (restaurantId) { setRid(restaurantId); }
         if (userRol) { setRole(userRol); }
    }

    useEffect(() => {
        // On initial load - run authCheck
        authCheck(router.asPath);

        // On route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // On route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck)

        // Unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // On execution - readUser
        readUser()

        const publicPaths = ['/'];
        const path = url.split('?')[0];
        console.log("Check cookie",getCookie("restaurantId"))

        // redirect to login page if accessing a private page and not logged in
        if (!getCookie("restaurantId") && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/',
            });
        } else {
            setAuthorized(true);
        }
    }

    // Check if the current page is the home page ('/')
    const isHomePage = router.pathname === '/'
    const isTablesPage = router.pathname === '/tables'
    const isOrdersPage = router.pathname === '/orders'
    const isFoodmenuPage = router.pathname === '/foodmenu'
    const isUsersPage = router.pathname === '/users'

    // Use Layout component for all pages except the home page
    if (isHomePage) {
        return <Component {...pageProps} />
    } else {
        let title = 'Mesas'
        if (isOrdersPage){
            title = 'Órdenes'
        } else if (isFoodmenuPage){
            title = 'Carta'
        } else if (isUsersPage){
            title = 'Usuarios'
        }

        return (
        <Layout title={title}>
            <Component {...pageProps} />
        </Layout>
        );
    }
}

