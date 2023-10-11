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
        const categoryOptions = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
        const actualizacionOpciones = ['Aumentar', 'Disminuir'];

        function createData(
            name: string,
            price: number,
            
          ) {
            return { name, price, };
          }
          
          const rows = [
            createData('Frozen yoghurt', 159),
            createData('Ice cream sandwich', 237),
            createData('Eclair', 262),
            createData('Cupcake', 305),
            createData('Gingerbread', 356),
          ];
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
      

        return(<>
          
                      
            <UpdatePrices
            categoryOptions={categoryOptions}
            actualizacionOpciones={actualizacionOpciones}
            listaProducto={rows}
            />
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

