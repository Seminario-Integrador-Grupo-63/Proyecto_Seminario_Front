import UpdatePrices from "@/Restaurant/UpdatePrices/UpdatePrices";
import {useState} from "react";
import {getCategories} from "@/requests";


export default function UpdatePricesPage() {

    const [categoryOptions, setCategoryOptions] = useState()
    const [updateOptions, setUpdateOptions] = useState(['Aumentar', 'Disminuir'])
    const [productList, setProductList] = useState()



    const fetchCategories = async (restaurantId) => {
        const fetchedCategories = await getCategories()
        setCategoryOptions(fetchedCategories)
    }



    return (<UpdatePrices
            categoryOptions={categoryOptions}
            actualizacionOpciones={updateOptions}
            listaProducto={productList}
        />

    )

}