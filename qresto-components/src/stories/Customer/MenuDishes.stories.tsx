import { Meta, StoryObj } from "@storybook/react";
import {customViewports} from "@/Stories/viewports";
import {widths100} from "@/Stories/viewports";
import {MenuDishes} from '@/Customer/MenuDishes/MenuDishes'
import {Container, Button} from "@mui/material"
import { ButtonDish } from "@/Customer/MenuDishes/ButtonDish";
import {Grid} from '@mui/material'
import {useState, useEffect} from 'react'
import { dishes } from "@/Common/FakeData/DishesData";
import { sideDishes } from "@/Common/FakeData/SideDishesData";
import { useScreenWidth } from "@/Common/utils";

export default {
    title: "components/Customer/MenuDishes",
    component: MenuDishes ,
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof MenuDishes >;

type Story = StoryObj<typeof MenuDishes>;

export const MenuDishesStory: Story = {
    render: () =>{
        const screenWidth = useScreenWidth()
        console.log("screenWidth: ", screenWidth)

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

        const screenWidth = useScreenWidth()

        const onClick = (dish) => {
            console.log("onClick")
            console.log("dish: ", dish)

        }
        return(<>
            <ButtonDish 
                dish={dishes[0]}
                onClick={onClick}
                displayTotalPrice={true}
                totalPricePosition={'right'}/>

            <p style={{
                position: 'relative',
                marginTop: '50px'
                }}>
                Screen width: {screenWidth}
            </p>
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

