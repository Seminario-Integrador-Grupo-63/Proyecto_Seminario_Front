import { Meta, StoryObj } from "@storybook/react";
import { FoodMenu } from "@/Restaurant/FoodMenu/FoodMenu";
import {widths100} from "@/Stories/viewports";
import { Layout } from "@/Restaurant/Layout/Layout";
import { dishes } from "@/Common/FakeData/DishesData";
import { sideDishes } from "@/Common/FakeData/SideDishesData";
import { menuData } from "@/Common/FakeData/Menu";

export default {
    title: "components/Restaurant/FoodMenu/FoodMenu",
    component: FoodMenu ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof FoodMenu >;

type Story = StoryObj<typeof FoodMenu>;

export const FoodMenuMain: Story = {
    render: () =>{
        console.log('dishes: ', dishes)
        return(<>
            <div 
                style={{
                    width:'90vw',
                    height: '90vh'}}>
                <FoodMenu/>
            </div>
        </>)
    } 
}

export const FoodMenuLayout: Story = {
    render: () =>{
        return(<>
            <Layout>
                <FoodMenu
                    menu={menuData}
                    sideDishes={sideDishes}/>
            </Layout>
        </>)
    } 
}

