import { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "@/Common/CustomButton";
import {widths100} from "@/Stories/viewports";
import {themeButton} from '@/Common/Theme/themes'
import { Container } from "@mui/material";

export default {
    title: "components/Common/CustomButton",
    component: CustomButton ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof CustomButton >;

type Story = StoryObj<typeof CustomButton>;

export const CustomButtonMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        return(<>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <CustomButton color={themeButton.palette.primary}>
                    My title
                </CustomButton>
            </Container>
        </>);
    } 
};


// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <CustomButtonMobile mode={"portrait"}/>
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

