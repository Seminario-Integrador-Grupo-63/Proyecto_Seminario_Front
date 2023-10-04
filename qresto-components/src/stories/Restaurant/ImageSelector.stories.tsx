import { Meta, StoryObj } from "@storybook/react";
import { ImageButton } from "@/components/Restaurant/ImageSelector/ImageButton";
import { ImageSelector } from "@/components/Restaurant/ImageSelector/ImageSelector";
import {widths100} from "@/Stories/viewports";
import { imageDish1 } from "@/Common/FakeData/DefaultImagesDishes/imageDish1";
import {useState} from 'react'
import { Button } from '@mui/material'

export default {
    title: "components/Restaurant/ImageSelector",
    component: ImageSelector ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof ImageSelector >;

type Story = StoryObj<typeof ImageSelector>;

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <ImageSelectorMobile mode={"portrait"}/>
//         </>);
//     } 
// };

export const ImageSelectorMain: Story = {
    render: () =>{
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };
      
        const handleClose = () => {
            setOpen(false);
        };

        return(<>
            <Button onClick={handleClickOpen}>Abrir ImageSelector</Button>
            <ImageSelector 
                open={open}
                onClose={handleClose}/>
        </>);
    } 
};

export const ImageSelectorButton: Story = {
    render: () =>{
        const myFunction = () => {
            
        }

        return(<>
            <ImageButton 
                image={imageDish1}/>
        </>);
    }
};

/**
const onAction = () => {

}

console.log(": ", )

*/

