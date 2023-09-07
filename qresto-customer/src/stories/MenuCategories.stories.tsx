
import { Meta, StoryObj } from "@storybook/react";
import {customViewports} from "./viewports";
import {widths100} from "./viewports";
import { MenuCategories} from '@/Customer/MenuCategories/MenuCategories';

export default {
    title: "components/MenuCategories",
    component: MenuCategories ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof MenuCategories >;

type Story = StoryObj<typeof MenuCategories>;

export const Common: Story = {
    render: () =>{

        const onClickCategory = (category) => {
            console.log(" ")
            console.log("MenuCategories onClickCategory ")
            console.log("category: ", category)
        }

        return(<>
            <MenuCategories
                onClickCategory={onClickCategory}/>
        </>);
    }
};

/**

const onAction = () => {

}

console.log(" ")
console.log("MenuCategories")
console.log(": ", )

 */

