import { Meta, StoryObj } from "@storybook/react";
import UpdatePrices from "@/components/Restaurant/UpdatePrices/UpdatePrices";
import { useState } from "react";
import Button from "@mui/material/Button";

export default {
    title: "components/Restaurant/UpdatePrices",
    component: UpdatePrices ,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof UpdatePrices >;

type Story = StoryObj<typeof UpdatePrices>;

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
          
                      
            <UpdatePrices
            />
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

