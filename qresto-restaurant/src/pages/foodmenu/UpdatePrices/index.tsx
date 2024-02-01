import UpdatePrices from "@/Restaurant/UpdatePrices/UpdatePrices";
import {useState} from "react";
import {confirmUpdatePrices, getCategories, getUpdatedPrices} from "@/requests";


export default function UpdatePricesPage() {

    const [categoryOptions, setCategoryOptions] = useState([])
    const [updateOptions, setUpdateOptions] = useState(['Aumentar', 'Disminuir'])
    const [productList, setProductList] = useState([])
    const [updateConfirmId, setUpdateConfirmId] = useState()



    const fetchCategories = async (rid) => {
        const fetchedCategories = await getCategories()
        setCategoryOptions(fetchedCategories)
    }
    const updatePricesPreview = async (rid, req) => {
        const updatePreview = await getUpdatedPrices(req, rid)
        setUpdateConfirmId(updatePreview.prices_code)
        setProductList(updatePreview.dishPrices)
    }
    const confirmUpdate = async () => {
        const updateConfirmation = await confirmUpdatePrices(updateConfirmId)
    }




    return (<UpdatePrices
            categoryOptions={categoryOptions}
            updateOptions={updateOptions}
            productList={productList}
            onSubmit={updatePricesPreview}
            onConfirm={confirmUpdate}

        />

    )

}