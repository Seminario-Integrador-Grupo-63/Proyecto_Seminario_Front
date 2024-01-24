import { Meta, StoryObj } from "@storybook/react";
import { Categories } from "../../components/Restaurant/Categories/Categories"; // Importamos nuestro componente
import { categories } from "@/components/Common/FakeData/CategoriesData";

export default {
    title: "components/Restaurant/Categories", // Acá podemos separar por carpetas
    component: Categories ,
    argTypes: {}

} as Meta<typeof Categories >;

type Story = StoryObj<typeof Categories>;

export const CategoriesTable: Story = { // "Common" es el nombre de la story, le podemos colocar el que queramos
    render: () =>{
        // Acá colocamos funciones por si queremos probar algo
        const setData = () => { // Está es una función de ejemplo, podemos colocar cualquier otra cosa
            
        }

        return(<>
            {/** Acá colocamos el componente*/}
            <Categories categories={categories}/>
        </>);
    } 
};