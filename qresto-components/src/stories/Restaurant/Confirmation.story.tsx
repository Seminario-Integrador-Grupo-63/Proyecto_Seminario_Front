import { Meta, StoryObj } from "@storybook/react";
import UpdatePrices from "@/components/Restaurant/UpdatePrices/UpdatePrices";
import { useState } from "react";
import Button from "@mui/material/Button";
import Updatelist from "@/components/Restaurant/UpdatePrices/Updatelist";
import { DishCard } from "@/components/Restaurant/DishCard/DishCard";
import { dishes } from "@/components/Common/FakeData/DishesData";
import { widths100 } from "../viewports";
import Confirmation from "@/components/Restaurant/UpdatePrices/Confirmation";


export default {
    title: "components/Restaurant/Updateprices",
    component: UpdatePrices ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof Updatelist >;

type Story = StoryObj<typeof Confirmation>;

export const Common: Story = {
    render: () =>{

        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
      

        return(<>         
                      
          <div >
          <Updatelist  />
        </div>
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

