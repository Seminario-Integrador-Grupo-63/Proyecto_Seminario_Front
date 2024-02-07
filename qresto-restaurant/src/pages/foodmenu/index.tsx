import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu';
import {
    getDishes,
    deleteDish,
    // getDish,
    postDish,
    putDish,
    deleteSideDish,
    // getSideDish,
    // updateSideDishInfo,
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
import {Dialog} from "@mui/material";
import UpdateList from "@/Restaurant/UpdatePrices/Updatelist";
import Confirmation from "@/Restaurant/UpdatePrices/Confirmation";
import { PanLoader as Loader } from '@/Common/PanLoader/PanLoader';

export default function FoodMenuPage() {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([]);
    const [sidedishes, setSideDishes] = useState([]);
    const [menu, setMenu] = useState([])
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')

    // Necesarios para el updatePrices
    const [dishList, setDishList] = useState([])
    const [updateConfirmId, setUpdateConfirmId] = useState('')
    const [updateListOpen, setUpdateListOpen] = useState(false)
    const [confirmationOpen, setConfirmationOpen] = useState(false)

    const router = useRouter();

    // Handle list of dishes to update
    const handleListOpen = async (req: any) => {

        // Request
        const updatePreview = await getUpdatedPrices(req)
        // Setting UseState
        setUpdateConfirmId(updatePreview.prices_code)
        setDishList(updatePreview.dishPrices)
        // Opening List
        setUpdateListOpen(true)
    }
    const handleListClose = () => {
        setUpdateListOpen(false)
    }

    //Handle Confirmation Dialog
    const handleConfirmationOpen = () => {
        setConfirmationOpen(true)
    }
    const handleConfirmationClose = () => {
        setConfirmationOpen(false)
    }

    // Confirm Update Prices and close dialog
    const confirmUpdate = async () => {
        confirmUpdatePrices(updateConfirmId).then(handleConfirmationClose)
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
    };

    const fetchMenu = async() => {
        const menuResult = await getMenu()
        setMenu(menuResult)
    }


    const handleDeleteCategory = async (category) => {
        console.log(' ')
        console.log('FoodMenuPage handleDeleteCategory(categoryId)')
        console.log('category: ',category)

        try {
            const result = await deleteCategory(category.id);
            if (result) {
                await fetchCategories(); // Recargar la lista de categorias después de eliminar una
                triggerFeedback(true, 'delete-category')

            }
            else{
                triggerFeedback(false, 'delete-category')
            }
        } catch (error) {
            console.error("Error al eliminar categoria:", error);

        }
    };

    const handleUpdateCategory = async (category) => {
        try {
            await updateCategory(category);
            await fetchCategories();
        } catch (error) {
            console.error("Error al actualizar información de la categoria:", error);
        }
    }

    const handleCreateCategory = async (category) => {
        try {
            await createCategory(category);
            await fetchCategories();
        } catch (error) {
            console.error("Error al crear la nueva categoria:", error);
        }
    }

    const fetchSideDishes = async () => {
        const result = await getSideDishes();
        setSideDishes(result);
    }

    const triggerFeedback = (state, action) => {
        setPositiveFeedback(state)
        if(state){
            if(action === 'delete-dish'){
                setTextFeedback('El plato ha sido eliminado exitosamente')
            } else if(action === 'create-dish'){
                setTextFeedback('El plato ha sido creado exitosamente')
            } else if (action === 'update-dish'){
                setTextFeedback('El plato ha sido actualizado exitosamente')
            }
        } else {
            if(action === 'delete-dish'){
                setTextFeedback('No se ha podido eliminar el plato')
            } else if(action === 'delete-sidedish'){
                setTextFeedback('No se ha podido eliminar la guarnicion')
            } else if(action === 'delete-sidedish') {
                setTextFeedback('No se ha podido eliminar la guarnicion')
            } else if(action === 'create-dish'){
                setTextFeedback('No se ha podido crear el plato. Por favor, intente más tarde')
            } else if (action === 'update-dish'){
                setTextFeedback('No se ha podido actualizar el plato. Por favor, intente más tarde')
            }
        }

        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    //platos
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

    } 

    // const handleEditDish = async (dishId) => {
    //     try {
    //         const dishToUpdateIndex = dishes.findIndex((dish) => dish.id === dishId);
    //         if (dishToUpdateIndex !== -1) {
    //             const updatedDish = await getDish(dishId);
    //             const updatedDishes = [...dishes];
    //             updatedDishes[dishToUpdateIndex] = updatedDish;
    //             setDishes(updatedDishes);
    //          }
    //         } catch (error) {
    //         console.error("Error al obtener información del plato:", error);
    //     }
    // }

    //guarnicion?

    const handleDeleteSideDish = async (sideDish) => {
        try {
            const result = await deleteSideDish(sideDish.id);
            if (result) {
               await fetchSideDishes(); // Recargar la lista de guarniciones después de eliminar una
                triggerFeedback(true, 'delete-sidedish'); 
            } else {
                triggerFeedback(false, 'delete-sidedish');
            }
        } catch (error) {
            console.error("Error al eliminar guarnición:", error);
        }
    }

    // const handleEditSideDish = async (sideDishId) => {
    //     try {
    //         const sideDishToUpdateIndex = sideDishId.findIndex((sideDish) => sideDish.id === sideDishId);
    //         if (sideDishToUpdateIndex !== -1) {
    //             const updatedSideDish = await getSideDish(sideDishId);
    //             const updatedSideDishes = [...sideDishId];
    //             updatedSideDishes[sideDishToUpdateIndex] = updatedSideDish;
    //             setSideDishes(updatedSideDishes);
    //         }
           
    //     } catch (error) {
    //         console.error("Error al obtener información de la guarnición:", error);
    //     }
    // }
    // const handleUpdateSideDishInfo = async (sideDishId, updatedInfo) => {
    //     try {
    //         await updateSideDishInfo(sideDishId, updatedInfo);
    //         await fetchSideDishes();
    //     } catch (error) {
    //         console.error("Error al actualizar información de la guarnición:", error);
    //     }
    // }


    return (<>
        <FoodMenu
            categories={categories}
            createDish={handleCreateDish}
            updateDish={handleUpdateDish}
            deleteDish={handleDeleteDish}
            sideDishes={sidedishes}
            menu={menu}
            deleteSideDish={handleDeleteSideDish}
            deleteCategory={handleDeleteCategory}
            createCategory={handleCreateCategory}
            updateCategory={handleUpdateCategory}
            handleUpdatePrices={handleListOpen}/>

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onClose={closeFeedback}/>

        <Loader open={loading}/>

        <Dialog open={updateListOpen} onClose={handleListClose}>
            <UpdateList
                open={updateListOpen}
                onClose={handleListClose}
                productList={dishList}
                onSubmit={handleConfirmationOpen}
                dishList={dishList}/>
        </Dialog>

        <Dialog open={confirmationOpen} onClose={handleConfirmationClose}>
            <Confirmation
                open={confirmationOpen}
                onClose={handleConfirmationClose}
                onSubmit={confirmUpdate}/>
        </Dialog>
     </>)
} 