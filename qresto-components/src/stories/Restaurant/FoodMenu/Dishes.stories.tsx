import { Meta, StoryObj } from "@storybook/react";
import { Dishes } from "@/Restaurant/FoodMenu/Dishes/Dishes";
import {DishForm} from '@/Restaurant/FoodMenu/Dishes/DishForm'
import {widths100} from "@/Stories/viewports";
import { dishes } from "@/Common/FakeData/DishesData";
import { categories } from '@/Common/FakeData/CategoriesData'
import { sideDishes } from "@/Common/FakeData/SideDishesData";
import {useState} from 'react'
import {Button} from '@mui/material'
import { menuData } from "@/Common/FakeData/Menu";

export default {
    title: "components/Restaurant/FoodMenu/Dishes",
    component: Dishes ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof Dishes >;

type Story = StoryObj<typeof Dishes>;

export const DishesMain: Story = {
    render: () =>{
        const myFunction = () => {}
        return(<>
            <Dishes menu={menuData}/>
        </>);
    }
};

export const DishFormEdit: Story = {
    render: () =>{

        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };
      
        const handleClose = () => {
            setOpen(false);
        };
        
        return(<>
            <Button variant="outlined" onClick={handleClickOpen}>
                Abrir DishForm
            </Button>

            <DishForm
                open={open}
                onClose={handleClose}
                categories={categories}
                sideDishes={sideDishes}
                dish={dishes[0]}
                isNew={ false }/>
        </>);
    }
};

// export const aspect2: Story = {
//     render: () => {
//         return(<>
//              
//         </>);
//     }
// };

/**
const onAction = () => {

}

console.log(": ", )

*/

