import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu';
import { getDishes, deleteDish, getDish, deleteSideDish, getSideDish, updateSideDishInfo, getSideDishes } from '@/requests';
import { triggerAsyncId } from 'async_hooks';
import { FeedbackDialog } from '@/Common/FeedbackDialog/FeedbackDialog';

export default function FoodMenuPage() {
    const [dishes, setDishes] = useState([]);
    const [sidedishes, setSideDishes] = useState([]);
    const router = useRouter();
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [actionFeedback, setActionFeedback] = useState('')

    useEffect(() => {
        fetchDishes();
        fetchSideDishes();
    }, []);

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
            setSideDishes(result);
        } catch (error) {
            console.error("Error al obtener platos:", error);
        }
    };

    const triggerFeedback = (state,action) => {
        setPositiveFeedback(state)
        if(state){
             if(actionFeedback === 'cancel-dish'){
                setTextFeedback('El plato ha sido cancelado exitosamente')
            }
        } else if(actionFeedback === 'cancel-dish ')
            {
                setTextFeedback('No se ha podido cancelar el plato')
            }
            else if(actionFeedback === 'cancel-sidedish ')
            {
                setTextFeedback('No se ha podido cancelar la guarnicion')
            }else if(actionFeedback === 'cancel-sidedish ')
            {
                setTextFeedback('No se ha podido cancelar la guarnicion')
            }
            setOpenFeedbackDialog(true)
   }
       
        const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    //platos

    const handleDeleteDish = async (dishId) => {
        try {
            const result = await deleteDish(dishId);
            if (result) {
                await fetchDishes(); // Recargar la lista de platos después de eliminar uno
                triggerFeedback(true, 'cancel-dish')
                
            }
            else{
                triggerFeedback(false, 'cancel-dish')
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
    };

    //guarnicion?

    const handleDeleteSideDish = async (sideDishId) => {
        try {
            const result = await deleteSideDish(sideDishId);
            if (result) {
                await fetchSideDishes();
            }
        } catch (error) {
            console.error("Error al eliminar guarnición:", error);
        }
    };

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
    };

    const handleUpdateSideDishInfo = async (sideDishId, updatedInfo) => {
        try {
            await updateSideDishInfo(sideDishId, updatedInfo);
            await fetchSideDishes();
        } catch (error) {
            console.error("Error al actualizar información de la guarnición:", error);
        }
    };

    return (<>
        <FoodMenu dishes={dishes} 
            deleteDish={handleDeleteDish} 
            sideDishes={sidedishes}
           // updateDish={handleEditDish} 
             />

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onClose={closeFeedback}/>
     </>)
} 