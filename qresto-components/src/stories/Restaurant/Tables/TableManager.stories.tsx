import { Meta, StoryObj } from "@storybook/react"
import { TableManager } from "@/Restaurant/Tables/TableManager"
import {widths100} from "@/Stories/viewports"
import { ordersDTO } from "@/Common/FakeData/OrdersData"
import { dishes } from "@/Common/FakeData/DishesData"
import {categories} from "@/Common/FakeData/CategoriesData"

export default {
    title: "components/Restaurant/Tables/TableManager",
    component: TableManager ,
    argTypes: {},
    parameters: {
        viewport: {viewports: widths100},
        layout: 'fullscreen'
    }
} as Meta<typeof TableManager >

type Story = StoryObj<typeof TableManager>

export const TableManagerMain: Story = {
    render: () =>{
        return(<>
            <TableManager 
                orders={ordersDTO}
                dishes={dishes}
                categories={categories}/>
        </>)
    } 
}
