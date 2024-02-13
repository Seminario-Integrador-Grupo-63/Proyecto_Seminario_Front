import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu';
import {
    getDishes,
    deleteDish,
    // getDish,
    postDish,
    putDish,
    // getSideDish,
    updateSideDish,
    createSideDish,
    deleteSideDish,
    getSideDishes,
    getMenu,
    getCategories,
    deleteCategory, 
    updateCategory, 
    createCategory,
    getUpdatedPrices, 
    confirmUpdatePrices
} from '@/requests';
import { FeedbackDialog } from '@/Common/FeedbackDialog/FeedbackDialog';
import { PanLoader as Loader } from '@/Common/PanLoader/PanLoader';

export default function FoodMenuPage() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([]);
    const [sidedishes, setSideDishes] = useState([]);
    const [menu, setMenu] = useState([])
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')

    const handleListOpen = async (req: any) => {
        // Request
        setLoading(true)
        const updatePreview = await getUpdatedPrices(req)
        setLoading(false)
        return updatePreview
    }

    // Confirm Update Prices and close dialog
    const confirmUpdate = async (uuid) => {
        setLoading(true)
        const result = await confirmUpdatePrices(uuid)
        if(result){
            await Promise.all([
                fetchMenu(),
                fetchSideDishes()
            ])
        }
        setLoading(false)
        triggerFeedback(result, 'update-prices')
        return result
    }

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        setLoading(true)
        await Promise.all([
            fetchCategories(),
            fetchSideDishes(),
            fetchMenu(),
        ])
        setLoading(false)
    }

    const fetchCategories = async () => {
        try {
            const result = await getCategories();
            setCategories(result);
        } catch (error) {
            console.error("Error al obtener categorias:", error);
        }
    }

    const fetchMenu = async() => {
        const menuResult = await getMenu()
        setMenu(menuResult)
    }

    const handleDeleteCategory = async (category) => {
        setLoading(true)
        const result = await deleteCategory(category.id);
        if (result) {
            await Promise.all([
                fetchMenu(),
                fetchCategories()
            ])
        }
        setLoading(false)
        triggerFeedback(true, 'delete-category')
        return result
    }

    const handleUpdateCategory = async (category) => {
        setLoading(true)
        const result = await updateCategory(category);
        if(result){
            await Promise.all([
                fetchMenu(),
                fetchCategories()
            ])
        }
        setLoading(false)
        triggerFeedback(result, 'update-category')
        await fetchCategories();
        return result
    }

    const handleCreateCategory = async (category) => {
        setLoading(true)    
        const result = await createCategory(category);
        if(result){
            await Promise.all([
                fetchMenu(),
                fetchCategories()
            ])
        }
        setLoading(false)
        triggerFeedback(result, 'create-category')
        return result
    }

    const fetchSideDishes = async () => {
        const result = await getSideDishes();
        setSideDishes(result);
    }

    const triggerFeedback = (state, action) => {
        setPositiveFeedback(state)
        setTextFeedback('')
        if(state){
            if(action === 'delete-dish'){
                setTextFeedback('El plato ha sido eliminado exitosamente')
            } else if(action === 'create-dish'){
                setTextFeedback('El plato ha sido creado exitosamente')
            } else if (action === 'update-dish'){
                setTextFeedback('El plato ha sido actualizado exitosamente')
            } else if (action === 'create-sidedish'){
                setTextFeedback('La guarnición ha sido creada exitosamente')
            } else if (action === 'update-sidedish'){
                setTextFeedback('La guarnición ha sido actualizada exitosamente')
            } else if (action === 'delete-sidedish'){
                setTextFeedback('La guarnición ha sido eliminada exitosamente')
            } else if (action === 'update-category'){
                setTextFeedback('La categoría ha sido actualizada exitosamente')
            } else if (action === 'create-category'){
                setTextFeedback('La categoría ha sido creada exitosamente')
            } else if (action === 'delete-category'){
                setTextFeedback('La categoría ha sido eliminada exitosamente')
            } else if (action === 'update-prices'){
                setTextFeedback('Los precios se han actualizado exitosamente exitosamente')
            }
        } else {
            if(action === 'delete-dish'){
                setTextFeedback('No se ha podido eliminar el plato')
            } else if(action === 'create-dish'){
                setTextFeedback('No se ha podido crear el plato. Por favor, intente más tarde')
            } else if (action === 'update-dish'){
                setTextFeedback('No se ha podido actualizar el plato. Por favor, intente más tarde')
            } else if (action === 'create-sidedish'){
                setTextFeedback('No se ha podido crear la guarnición. Por favor, intente más tarde')
            } else if (action === 'update-sidedish'){
                setTextFeedback('No se ha podido actualizar la guarnición. Por favor, intente más tarde')
            } else if (action === 'delete-sidedish'){
                setTextFeedback('No se ha podido eliminar la guarnición. Por favor, intente más tarde')
            } else if (action === 'update-category'){
                setTextFeedback('No se ha podido actualizar la categoría. Por favor, intente más tarde')
            } else if (action === 'create-category'){
                setTextFeedback('No se ha podido crear la categoría. Por favor, intente más tarde')
            } else if (action === 'delete-category'){
                setTextFeedback('No se ha podido eliminar la categoría. Por favor, intente más tarde')
            } else if (action === 'update-prices'){
                setTextFeedback('No se han podido actualizar los precios. Por favor, intente más tarde')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    const handleDeleteDish = async (dish) => {
        const result = await deleteDish(dish.id);
        if (result) {
            await fetchMenu(); // Recargar la lista de platos después de eliminar uno
        }
        triggerFeedback(result, 'delete-dish')
    }
    
    const handleCreateDish = async (object) => {
        setLoading(true)
        const result = await postDish(object)
        if(result){
            await fetchMenu()
        }
        setLoading(false) 
        triggerFeedback(result, 'create-dish')
        return result
    }

    const handleUpdateDish = async (object) => {
        setLoading(true)
        const result = await putDish(object)
        if(result){
            await fetchMenu()
        }
        setLoading(false)
        triggerFeedback(result, 'update-dish')
        return result
    }

    const handleDeleteSideDish = async (sideDish) => {
        setLoading(true)
        const result = await deleteSideDish(sideDish.id);
        if (result) {
            await Promise.all([
                fetchSideDishes(),
                fetchMenu()
            ])
        } 
        setLoading(false)
        triggerFeedback(result, 'delete-sidedish'); 
        return result
    }

    const handleCreateSideDish = async (sideDish) => {
        setLoading(true)
        const result = await createSideDish(sideDish)
        if (result) {
            await Promise.all([
                fetchSideDishes(),
                fetchMenu()
            ])
        }
        setLoading(false)
        triggerFeedback(result, 'create-sidedish');
    }

    const handleUpdateSideDishInfo = async (updatedInfo) => {
        setLoading(true)
        const result = await updateSideDish(updatedInfo);
        if(result){
            await Promise.all([
                fetchSideDishes(),
                fetchMenu()
            ])
        }
        setLoading(false)
        triggerFeedback(result, 'update-sidedish')
    }

    return (<>
        <FoodMenu
            categories={categories}
            sideDishes={sidedishes}
            menu={menu}
            createDish={handleCreateDish}
            updateDish={handleUpdateDish}
            deleteDish={handleDeleteDish}
            createSideDish={handleCreateSideDish}
            updateSideDish={handleUpdateSideDishInfo}
            deleteSideDish={handleDeleteSideDish}
            deleteCategory={handleDeleteCategory}
            createCategory={handleCreateCategory}
            updateCategory={handleUpdateCategory}
            handleUpdatePrices={handleListOpen}
            confirmUpdatePrices={confirmUpdate}/>

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onClose={closeFeedback}/>

        <Loader open={loading}/>
    </>)
}