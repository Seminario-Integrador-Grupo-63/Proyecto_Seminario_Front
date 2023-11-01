import { Meta, StoryObj } from "@storybook/react";
import {widths100} from "@/Stories/viewports";
import { Login } from "@/Restaurant/Login/Login";
import {Container, Button} from "@mui/material"
import {useState} from 'react';

export default {
    title: "components/Restaurant/Login",
    component: Login ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100}
    }
} as Meta<typeof Login >;

type Story = StoryObj<typeof Login>;

export const Common: Story = {
    render: () =>{
        const [error, setError] = useState(false)

        const onSignInSubmit = (data: {username: string, password: string}) => {
            console.log("Story.onSignInSubmit")
            console.log("data: ", data)
            console.log("  ")
        }

        const setErrorMessage = () => {
            setError(!error);
        }

        return(<>
            <Container>
                <Login
                    onSignInSubmit={onSignInSubmit}
                    error={error}/>
            </Container>
        </>);
    } 
};

// export const MobilePortrait: Story = {
//     render: () =>{
//         return(<>
//             <LoginMobile mode={"portrait"}/>
//         </>);
//     } 
// };

// export const MobileLandscape: Story = {
//     render: () =>{
//         return(<>
//             <LoginMobile mode={"landscape"}/>
//         </>);
//     } 
// };

/**

const onAction = () => {

}
console.log("")
console.log(": ", )
console.log("  ")

 */

