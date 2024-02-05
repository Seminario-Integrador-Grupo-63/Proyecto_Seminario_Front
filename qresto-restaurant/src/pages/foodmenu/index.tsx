import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FoodMenu } from '@/Restaurant/FoodMenu/FoodMenu';
import { getDishes, deleteDish, getDish, deleteSideDish, getSideDish, updateSideDishInfo, getSideDishes, getCategories, createSideDish, createDish } from '@/requests';
import { FeedbackDialog } from '@/Common/FeedbackDialog/FeedbackDialog';
import { SideDishes } from '@/Restaurant/FoodMenu/SideDishes/SideDishes';
import { Categories } from '@/Restaurant/Categories/Categories';

export default function FoodMenuPage() {
    const [dishes, setDishes] = useState([]);
    const [sidedishes, setSideDishes] = useState([]);
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [actionFeedback, setActionFeedback] = useState('')

    useEffect(() => {
        fetchCategories(); // Agrega una función para cargar categorías
        fetchDishes();
        fetchSideDishes();
      }, []);
      
      const fetchCategories = async () => {
        try {
          const result = await getCategories(); // Ajusta esto según cómo obtienes las categorías
          setCategories(result);
        } catch (error) {
          console.error("Error al obtener categorías:", error);
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

    const handleCreateDish = async (dish) => {
        console.log('ddddish: ', dish)
        try{
            const result = await createDish(dish)
            console.log('resp handldeDSideC' + result)
            if (result) {
                await fetchDishes(); // Recargar la lista de guarniciones después de eliminar una
                 triggerFeedback(true, 'create-sidedish'); 
             } else {
                 triggerFeedback(false, 'create-sidedish');
             }
        }catch (error) {
            console.error("Error al crear el plato:", error);
        }
    }

    const handleUpdateDishInfo = async (updatedInfo) => {
        try {
            await createDish(updatedInfo);
            await fetchDishes();
        } catch (error) {
            console.error("Error al actualizar información del plato:", error);
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

    const handleCreateSideDish = async (sideDish) => {
        console.log('sideDish: ', sideDish)
        try{
            const result = await createSideDish(sideDish)
            console.log('resp handldeDSideC' + result)
            if (result) {
                await fetchSideDishes(); // Recargar la lista de guarniciones después de eliminar una
                 triggerFeedback(true, 'create-sidedish'); 
             } else {
                 triggerFeedback(false, 'create-sidedish');
             }
        }catch (error) {
            console.error("Error al crear guarnición:", error);
        }
    }

    const handleUpdateSideDishInfo = async (updatedInfo) => {
        try {
            await updateSideDishInfo(updatedInfo);
            await fetchSideDishes();
        } catch (error) {
            console.error("Error al actualizar información de la guarnición:", error);
        }
    }

    return (<>
        <FoodMenu dishes={dishes}             
            sideDishes={sidedishes}
            categories={categories}
            deleteSideDish={handleDeleteSideDish}
            deleteDish={handleDeleteDish}
            createDish={handleCreateDish}
            updateDish={handleUpdateDishInfo} 
            createSideDish={handleCreateSideDish}
            updateSideDishes={handleUpdateSideDishInfo}
             />

        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={"Se ha eliminado con éxito"}
            onClose={closeFeedback}/>
     </>)
} 