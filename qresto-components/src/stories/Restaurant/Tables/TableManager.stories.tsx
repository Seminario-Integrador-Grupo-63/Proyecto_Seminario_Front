import { Meta, StoryObj } from "@storybook/react"
import { TableManager } from "@/Restaurant/Tables/TableManager"
import {widths100} from "@/Stories/viewports"
import { ordersDTO } from "@/Common/FakeData/OrdersData"
import { dishes } from "@/Common/FakeData/DishesData"
import {categories} from "@/Common/FakeData/CategoriesData"
import { sectors2 } from "@/Common/FakeData/Tables"

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

export const TableManagerWithOrders: Story = {
    render: () =>{
        return(<>
            <TableManager 
                table={sectors2[0].tables[0]}
                orders={ordersDTO}
                dishes={dishes}
                categories={categories}/>
        </>)
    } 
}

export const TableManagerWithoutOrders: Story = {
    render: () =>{
        return(<>
            <TableManager 
                table={sectors2[0].tables[0]}
                orders={[]}
                dishes={dishes}
                categories={categories}/>
        </>)
    } 
}