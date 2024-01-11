import { Meta, StoryObj } from "@storybook/react";
import UpdatePrices from "@/components/Restaurant/UpdatePrices/UpdatePrices";
import { useState } from "react";
import Button from "@mui/material/Button";
import Updatelist from "@/components/Restaurant/UpdatePrices/Updatelist";
import { DishCard } from "@/components/Restaurant/FoodMenu/Dishes/DishCard/DishCard";
import { dishes } from "@/components/Common/FakeData/DishesData";
import { widths100 } from "../viewports";


export default {
    title: "components/Restaurant/Updateprices",
    component: UpdatePrices ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }


} as Meta<typeof UpdatePrices >;

type UpdatelistStory = StoryObj<typeof Updatelist>;

export const Common: UpdatelistStory = {
    render: () =>{

        const [open, setOpen] = useState(false);

        
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

        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
      

        return(<>         
                      
          <div >
          <Updatelist 
          open={handleClickOpen}
          onClose={handleClose}
          listaProducto={rows}
           />
        </div>
        </>);
    } 
};

/**

const onAction = () => {

}

console.log(": ", )

 */

