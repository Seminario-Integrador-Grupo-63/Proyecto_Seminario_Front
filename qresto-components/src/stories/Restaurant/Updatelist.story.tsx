import { Meta, StoryObj } from "@storybook/react";
import UpdatePrices from "@/components/Restaurant/UpdatePrices/UpdatePrices";
import { useState } from "react";
import Button from "@mui/material/Button";
import Updatelist from "@/components/Restaurant/UpdatePrices/Updatelist";
import { DishCard } from "@/components/Restaurant/DishCard/DishCard";
import { dishes } from "@/components/Common/FakeData/DishesData";
import { widths100 } from "../viewports";


export default {
    title: "components/Restaurant/Updateprices",
    component: UpdatePrices ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof UpdatePrices >;

type Story = StoryObj<typeof Updatelist>;

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
          <UpdatePrices  />
        </div>
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

