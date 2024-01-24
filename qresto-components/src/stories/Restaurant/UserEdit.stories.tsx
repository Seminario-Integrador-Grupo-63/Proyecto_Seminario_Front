import UserEdit from "@/Restaurant/Users/UserEdit";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";


export default {
    title: "components/Restaurant/UserEdit",
    component: UserEdit ,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof UserEdit >;

type Story = StoryObj<typeof UserEdit>;

export const Common: Story = {
    render: () =>{
        
        const permisosOpciones = ['Mozo', 'Administrador'];
        
          
        const [] = useState(false);          

        return(<>
          
                      
            <UserEdit
            
            permisosOpciones={permisosOpciones}
            
            />
        </>);
    } 
};