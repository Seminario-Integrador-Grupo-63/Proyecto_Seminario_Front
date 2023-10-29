import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Button from "@mui/material/Button";
import OrderByTable from "@/components/Restaurant/TableSelection/OrderByTable";

export default {
    title: "components/Restaurant/OrderByTable",
    component: OrderByTable,
    argTypes: {},
    // parameters: {
    //     viewport: {viewports: widths100}
    // }
} as Meta<typeof OrderByTable>;

type Story = StoryObj<typeof OrderByTable>;

export const Common: Story = {
    render: () => {
        const categoryOptions = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
        const actualizacionOpciones = ['Aumentar', 'Disminuir'];

        function createData(
            dish: string,
            cant: number,
            precio: number,
            guarnicion: string,
            precioGuarnicion: number,
            subTotal: number,
            tiempoEntrega: number,

        ) {
            return { dish, cant, precio, guarnicion, precioGuarnicion, subTotal, tiempoEntrega };
        }

        const ordenes = [
            createData('Frozen yoghurt', 2, 1800, 'papas', 200, 2000, 15),
            createData('Ice cream sandwich', 2, 1800, 'pure', 200, 2000, 15),
            createData('Eclair', 2, 1800, 'ensalada', 200, 2000, 15),
            createData('Cupcake', 2, 1800, 'papas', 200, 2000, 15),
            createData('Gingerbread', 2, 1800, 'pure', 200, 2000, 15),
        ];
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };


        return (<>


            <OrderByTable

            Orden={ordenes}
            />
        </>);
    }
};

/**

const onAction = () => {

}

console.log(": ", )

 */

