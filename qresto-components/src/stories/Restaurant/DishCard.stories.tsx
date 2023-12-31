import { Meta, StoryObj } from "@storybook/react";
//*import { DishCard } from '@/components/Restaurant/DishCard/DishCard.1';
import {widths100} from "@/Stories/viewports";
import { dishes } from "@/components/Common/FakeData/DishesData";
import { DishCard } from "@/components/Restaurant/DishCard/DishCard";

export default {
    title: "components/Restaurant/DishCard",
    component: DishCard ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof DishCard >;

type Story = StoryObj<typeof DishCard>;

export const DishCardMain: Story = {
    render: () =>{

        const myFunction = () => {
            
        }

        const contenedor = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          };

        return( 

            <div style={contenedor} >
            {dishes.map(dish => <DishCard dish={dish} />)}
            </div>
           
        );
    } 
};

// export const Aspect1: Story = {
//     render: () =>{
//         return(<>
//             <DishCardMobile mode={"portrait"}/>
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

