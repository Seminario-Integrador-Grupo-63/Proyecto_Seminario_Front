import { Meta, StoryObj } from "@storybook/react";
import {customViewports} from "@/Stories/viewports";
import {widths100} from "@/Stories/viewports";
import {MenuDishes} from '@/Customer/MenuDishes/MenuDishes'
import {Container, Button} from "@mui/material"
import { ButtonDish } from "@/Customer/MenuDishes/ButtonDish";
import {Grid} from '@mui/material'
import { dishes } from "@/Common/FakeData/DishesData";

export default {
    title: "components/Customer/MenuDishes",
    component: MenuDishes ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof MenuDishes >;

type Story = StoryObj<typeof MenuDishes>;

export const MenuDishesStory: Story = {
    render: () =>{

        const onClickDish = (dish) => {
            console.log(" ")
            console.log("MenuDishes onClickDish")
            console.log("dish: ", dish)
        }

        return(<>
            <MenuDishes
                dishes={dishes}
                title={'Categoría 1'}
                onClickDish={onClickDish}/>
        </>);
    } 
};

export const ButtonDishStory: Story = {
    render: () =>{

        const setData = () => {
            
        }

        return(<>
            <Grid>
                <ButtonDish dish={dishes[0]}/>
            </Grid>

        </>);
    } 
};

/**

const onAction = () => {

}

console.log(" ")
console.log("MenuDishes")
console.log(": ", )

 */

