import { Meta, StoryObj } from "@storybook/react";
import { MessageDialog } from "@/Common/MessageDialog";
import {widths100} from "@/Stories/viewports";
import { Button } from  '@mui/material'
import {useState} from 'react'

export default {
    title: "components/Common/MessageDialog",
    component: MessageDialog ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof MessageDialog >;

type Story = StoryObj<typeof MessageDialog>;

export const MessageDialogMain: Story = {
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

            <MessageDialog 
                open={open}
                title={'Se confirmará la orden'}
                description={'Esta acción puede deshacerse antes de que su orden esté en preparación'}
                onClose={handleClose}/>
        </>);
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <MessageDialogMobile mode={"portrait"}/>
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

