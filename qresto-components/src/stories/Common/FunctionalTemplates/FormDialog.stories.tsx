import { Meta, StoryObj } from "@storybook/react";
import { FormDialog } from "@/Common/FunctionalTemplates/FormDialog";
import {widths100} from "@/Stories/viewports";
import { Button } from  '@mui/material'
import {useState} from 'react'

export default {
    title: "components/Common/FunctionalTemplates/FormDialog",
    component: FormDialog ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof FormDialog >;

type Story = StoryObj<typeof FormDialog>;

export const FormDialogMain: Story = {
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
                Abrir dialog
            </Button>

            <FormDialog 
                open={open}
                submitText="aceptar"
                action1Text="sgdf"
                action1Visible={true}
                onClose={handleClose}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <FormDialogMobile mode={"portrait"}/>
//         </>);
//     } 
// };

// export const aspect2: Story = {
//     render: () =>{
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

