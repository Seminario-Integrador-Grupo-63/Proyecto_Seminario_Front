import UpdatePrices from "@/Restaurant/UpdatePrices/UpdatePrices";
import React, {useEffect, useState} from "react";
import {confirmUpdatePrices, getCategories, getUpdatedPrices} from "@/requests";
import {getCookie} from "cookies-next";
import {Dialog} from "@mui/material";
import UpdateList from "@/Restaurant/UpdatePrices/Updatelist";
import Confirmation from "@/Restaurant/UpdatePrices/Confirmation";


export default function UpdatePricesPage() {

    const [categoryOptions, setCategoryOptions] = useState([])
    const [updateOptions, setUpdateOptions] = useState(['Aumentar', 'Disminuir'])

    const [productList, setProductList] = useState([])
    const [updateConfirmId, setUpdateConfirmId] = useState()

    const [updateListOpen, setUpdateListOpen] = useState(false)
    const [confirmationOpen, setConfirmationOpen] = useState(false)

    // Probablemente innceesario
    const [restaurantId, setRestaurantId] = useState<number>()


    useEffect(() => {
        fetchCategories()
        const ridCookie = getCookie("restaurantId")
        const ridNumber:number = +ridCookie
        setRestaurantId(ridNumber)
    }, []);


    const handleListOpen = (req) => {
        // Debo probar que el .then funcione como creo que funciona
        updatePricesPreview(req).then(r => setUpdateListOpen(true))
    }
    const handleListClose = () => {
        setUpdateListOpen(false)
    }
    const handleConfirmationOpen = () => {
      setConfirmationOpen(true)
    }
    const handleConfirmationClose = () => {
      setConfirmationOpen(false)
    }


    const fetchCategories = async () => {
        const fetchedCategories = await getCategories()
        setCategoryOptions(fetchedCategories)
    }
    const updatePricesPreview = async (req) => {
        const updatePreview = await getUpdatedPrices(req)
        setUpdateConfirmId(updatePreview.prices_code)
        setProductList(updatePreview.dishPrices)
    }
    const confirmUpdate = async () => {
        const updateConfirmation = await confirmUpdatePrices(updateConfirmId)
    }



    return (<>
            <UpdatePrices
                categoryOptions={categoryOptions}
                updateOptions={updateOptions}
                onSubmit={handleListOpen}
            />
            {/* Ventana flotante */}
            <Dialog open={updateListOpen} onClose={handleListClose}>
                <UpdateList
                    open={updateListOpen}
                    onClose={handleListClose}
                    productList={productList}
                    onSubmit={handleConfirmationOpen}
                />
            </Dialog>
            <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
                <Confirmation
                    open={confirmationOpen}
                    onClose={handleConfirmationClose}
                    onSubmit={confirmUpdate}
                />
            </Dialog>
    </>



    )

}