import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'
import {MenuCategories} from '@/Customer/MenuCategories/MenuCategories'
import {getCategoriesRequest} from '@/requests'

const inter = Inter({ subsets: ['latin'] })

export default function MenuCategoriesPage() {
    const router = useRouter()

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = await getCategoriesRequest()
        setCategories(response)
    }

    const onClickCategory = (category) => {
        router.replace(`/menudishes?category=${category.id}`)
    }

    return (<>
        <MenuCategories 
            categories={categories}
            onClickCategory={onClickCategory}/>
    </>)
}
/**
console.log(" ")
console.log("MenuCategoriesPage")
console.log(": ", )
*/
