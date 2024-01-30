//import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/Restaurant/Layout/Layout'
import {useState} from "react";

export default function App({ Component, pageProps, router }: AppProps) {

    const [loggedUser, setLoggedUser] = useState()


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

