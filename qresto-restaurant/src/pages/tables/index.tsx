import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { TableSchema } from '@/Restaurant/Tables/TableSchema'
import { PanLoader as Loader} from '@/Common/PanLoader/PanLoader'
import {
    postTable,
    getSectors,
    postSector,
    putSector,
    deleteSector as deleteSectorRequest,
    getTablesGrid
} from '@/requests'
import { FeedbackDialog } from '@/Common/FeedbackDialog/FeedbackDialog';
import { getCookie } from 'cookies-next'

const restaurantId = 1

export default function TablesPage() {
    const router = useRouter()
    const [grid, setGrid] = useState([])
    const [sectors, setSectors] = useState([])
    const [loading, setLoading] = useState(false)
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [userRole, setUserRole] = useState('waiter')

    // const searchParams = useSearchParams()

    useEffect(() => {
        setLoading(true)
        fetchData()
        setLoading(false)
        const interval = setInterval(() => {
            fetchData(); // Fetch data periodically
        }, 5000); // Adjust the interval time as needed (e.g., every 5 seconds)

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [])

    const fetchGrid = async () => {
        const tablesGrid = await getTablesGrid()
        setGrid(tablesGrid)
    }

    const fetchSectors = async () => {
        const result = await getSectors(restaurantId)
        setSectors(result)
    }

    const fetchData = async () =>{
        // setLoading(true)
        let role = getCookie('userRole')
        setUserRole(role)
        await Promise.all([
            fetchSectors(),
            fetchGrid()
        ])
        // setLoading(false)
    }

    const onTableClick = (table) => {
        router.replace({
            pathname: '/tables/tablemanager',
            query: {
                tableId: table.id
            }
        })
    }

    const createTable = async (table) => {
        setLoading(true)
        const result = await postTable(table)
        await fetchGrid()
        setLoading(false)
        return result
    }

    const createSector = async (sector) => {
        setLoading(true)
        const result = await postSector(sector)
        if(result){
            await fetchData()
        }
        triggerFeedback(result, 'create-sector')
        setLoading(false)
        return result
    }

    const updateSector = async (sector) => {
        setLoading(true)
        const result = await putSector(sector)
        if(result){
            await fetchData()
        }
        setLoading(false)
        return result
    }

    const deleteSector = async (sectorId) => {
        setLoading(true)
        const result = await deleteSectorRequest(sectorId)
        if(result){
            await fetchData()
        }
        triggerFeedback(result, 'delete-sector')
        setLoading(false)
    }

    const triggerFeedback = (state, action) => {
        setPositiveFeedback(state)
        if(state){
            if(action === 'create-sector'){
                setTextFeedback('El sector se ha creado exitosamente')
            } else if (action === 'delete-sector'){
                setTextFeedback('El sector se ha eliminado exitosamente')
            }
        } else {
            if(action === 'create-sector'){
                setTextFeedback('No se ha podido crear el sector')
            } else if (action === 'delete-sector'){
                setTextFeedback('No se ha podido eliminar el sector')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    return (<>
        <TableSchema 
            userRole={userRole}
            grid={grid}
            sectors={sectors}
            restaurantId={restaurantId}
            onTableClick={onTableClick}
            createTable={createTable}
            createSector={createSector}
            updateSector={updateSector}
            deleteSector={deleteSector}/>

        <Loader open={loading}/>
        
        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onClose={closeFeedback}/>
    </>)
}
