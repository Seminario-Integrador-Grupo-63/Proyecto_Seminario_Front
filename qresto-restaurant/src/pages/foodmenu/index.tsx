import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu';
import { getDishes, deleteDish, getDish, deleteSideDish, getSideDish, updateSideDishInfo, getSideDishes, getCategories, deleteCategory } from '@/requests';
import { FeedbackDialog } from '@/Common/FeedbackDialog/FeedbackDialog';

export default function FoodMenuPage() {
    const [categories, setCategories] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [sidedishes, setSideDishes] = useState([]);
    const router = useRouter();
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [actionFeedback, setActionFeedback] = useState('')

    useEffect(() => {
        fetchCategories();
        fetchDishes();
        fetchSideDishes();
    }, []);

    //categorias

    const fetchCategories = async () => {
        console.log(' ')
        console.log('index fetchCategories()')
        console.log(': ', )
        try {
            const result = await getCategories();
            console.log('result: ', result)
            setCategories(result);
        } catch (error) {
            console.error("Error al obtener categorias:", error);
        }
    };

    const handleDeleteCategory = async (category) => {
        console.log(' ')
        console.log('FoodMenuPage handleDeleteCategory(categoryId)')
        console.log('category: ',category)

        try {
            const result = await deleteCategory(category.id);
            //console.log('resp handldeDeCategory' + result)
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

    const fetchDishes = async () => {
        console.log(' ')
        console.log('index fetchDishes()')
        console.log(': ', )
        try {
            const result = await getDishes();
            console.log('result: ', result)
            setDishes(result);
        } catch (error) {
            console.error("Error al obtener platos:", error);
        }
    };

    const fetchSideDishes = async () => {
        try {
            const result = await getSideDishes();
            console.log('result: ', result)
            setSideDishes(result);
        } catch (error) {
            console.error("Error al obtener platos:", error);
        }
    };

    const triggerFeedback = (state,action) => {
        setPositiveFeedback(state)
        if(state){
             if(actionFeedback === 'delete-dish'){
                setTextFeedback('El plato ha sido eliminado exitosamente')
            }
        } else if(actionFeedback === 'delete-dish ')
            {
                setTextFeedback('No se ha podido eliminar el plato')
            }
            else if(actionFeedback === 'delete-sidedish ')
            {
                setTextFeedback('No se ha podido eliminar la guarnicion')
            }else if(actionFeedback === 'delete-sidedish ')
            {
                setTextFeedback('No se ha podido eliminar la guarnicion')
            }
            setOpenFeedbackDialog(true)
   }
       
        const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    //platos
    const handleDeleteDish = async (dish) => {
        console.log(' ')
        console.log('FoodMenuPage handleDeleteDish(dishId)')
        console.log('dish: ',dish)
        try {
            const result = await deleteDish(dish.id);
            //console.log('resp handldeDeDish' + result)
            if (result) {
                await fetchDishes(); // Recargar la lista de platos después de eliminar uno
                triggerFeedback(true, 'delete-dish')
                
            }
            else{
                triggerFeedback(false, 'delete-dish')
            }
        } catch (error) {
            console.error("Error al eliminar plato:", error);

        }
    };

    const handleEditDish = async (dishId) => {
        try {
            const dishToUpdateIndex = dishes.findIndex((dish) => dish.id === dishId);
            if (dishToUpdateIndex !== -1) {
                const updatedDish = await getDish(dishId);
                const updatedDishes = [...dishes];
                updatedDishes[dishToUpdateIndex] = updatedDish;
                setDishes(updatedDishes);
             }
            } catch (error) {
            console.error("Error al obtener información del plato:", error);
        }
    }

    //guarnicion?

    const handleDeleteSideDish = async (sideDish) => {
        console.log(' ')
        console.log('FoodMenuPage handleDeleteSideDish(sideDishId)')
        console.log('sideDish: ', sideDish)
        try {
            const result = await deleteSideDish(sideDish.id);
            console.log('resp handldeDSideD' + result)
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

    const handleEditSideDish = async (sideDishId) => {
        try {
            const sideDishToUpdateIndex = sideDishId.findIndex((sideDish) => sideDish.id === sideDishId);
            if (sideDishToUpdateIndex !== -1) {
                const updatedSideDish = await getSideDish(sideDishId);
                const updatedSideDishes = [...sideDishId];
                updatedSideDishes[sideDishToUpdateIndex] = updatedSideDish;
                setSideDishes(updatedSideDishes);
            }
           
        } catch (error) {
            console.error("Error al obtener información de la guarnición:", error);
        }
    }

    const handleUpdateSideDishInfo = async (sideDishId, updatedInfo) => {
        try {
            await updateSideDishInfo(sideDishId, updatedInfo);
            await fetchSideDishes();
        } catch (error) {
            console.error("Error al actualizar información de la guarnición:", error);
        }
    }

    return (<>
        <FoodMenu
            dishes={dishes}
            categories={categories}
            deleteDish={handleDeleteDish}
            sideDishes={sidedishes}
            deleteSideDish={handleDeleteSideDish}
           // updateDish={handleEditDish} 
            deleteCategory={handleDeleteCategory}
             />

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={"Se ha eliminado con éxito"}
            onClose={closeFeedback}/>
     </>)
} 