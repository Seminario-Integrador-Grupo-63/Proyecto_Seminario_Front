import { Meta, StoryObj } from "@storybook/react"
import { TableManager } from "@/Restaurant/Tables/TableManager"
import {widths100} from "@/Stories/viewports"
import { ordersDTO } from "@/Common/FakeData/OrdersData"
import { grid } from "@/Common/FakeData/Tables"
import { menuData } from "@/Common/FakeData/Menu"
import { sectors } from "@/Common/FakeData/SectorsData"

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

        const onOpenOrderForm = () => {
            return menuData
        }
        return(<>
            <TableManager 
                table={grid[0].tables[0]}
                sectors={sectors}
                onOpenOrderForm={onOpenOrderForm}
                menu={menuData}
                orders={ordersDTO}/>
        </>)
    } 
}

export const TableManagerWithoutOrders: Story = {
    render: () =>{
        return(<>
            <TableManager 
                table={grid[0].tables[0]}
                orders={[]}/>
        </>)
    } 
}