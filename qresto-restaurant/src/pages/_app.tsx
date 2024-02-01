//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/Restaurant/Layout/Layout'
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getCookie} from "qresto-components/src/pages/api/utils";

export default function App({ Component, pageProps, router }: AppProps) {


    const router2 = useRouter();
    const [restaurantId, setRestaurantId] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        const log = getCookie("restaurantId")
        // redirect to login page if accessing a private page and not logged in
        setRestaurantId(log);
        const publicPaths = ['/'];
        const path = url.split('?')[0];
        console.log(restaurantId)
        if (!restaurantId && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }


    // Check if the current page is the home page ('/')
    const isHomePage = router.pathname === '/'

    // Use Layout component for all pages except the home page
    if (isHomePage) {
        return <Component {...pageProps} />
    } else {
        return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
        );
    }
}

