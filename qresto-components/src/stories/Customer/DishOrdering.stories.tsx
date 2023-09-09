
import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import { DishOrdering } from "@/Customer/DishOrdering/DishOrdering";
import { SideDishSelector } from "@/Customer/DishOrdering/SideDishSelector";
import { dishes } from "@/Common/FakeData/DishesFakeData";

export default {
    title: "components/Customer/DishOrdering",
    component: DishOrdering ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof DishOrdering >;

type Story = StoryObj<typeof DishOrdering>;

export const DishOrderingStory: Story = {
    render: () =>{

        const setData = () => {
            
        }

        return(<>
            <DishOrdering dish={dishes[0]}/>
        </>);
    } 
};

export const SideDishSelectorStory: Story = {
    render: () =>{

        const setData = () => {
            
        }
        
        return(<>
            <SideDishSelector sideDishes={dishes[0].sideDishes}/>
        </>);
    }
};

/**

const onAction = () => {

}

console.log(": ", )

 */

