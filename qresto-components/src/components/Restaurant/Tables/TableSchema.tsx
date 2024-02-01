import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { 
    Grid, 
    Container,
    Button,
    ThemeProvider
} from '@mui/material'
import { Sector } from "./Sector";
import { themeButtonWine } from "@/Common/Theme/themes";
import { TableForm } from "./TableForm";
import { PanLoader as Loader} from '@/Common/PanLoader/PanLoader'
import { FeedbackDialog } from "@/Common/FeedbackDialog/FeedbackDialog";
import { SectorForm } from "./SectorForm";


const restaurantId = 1

export const TableSchema = ( props: any ) => {
    const [openTableForm, setOpenTableForm] = useState(false)
    const [sectors, setSectors] = useState([])
    const [loading, setLoading] = useState(false)
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [openSectorForm, setOpenSectorForm] = useState(false)

    useEffect(() => {
        setSectors(props.sectors)
    }, [props.sectors])

    const onNewTable = () => {
        setOpenTableForm(true)
    }

    const onNewSector = () => {
        setOpenSectorForm(true)
    }

    const createTable = async (table) => {
        setLoading(true)
        const result = await props.createTable(table)
        setLoading(false)
        triggerFeedback(result, 'create-table')
        setOpenTableForm(false)
    }

    const triggerFeedback = (state, operation) => {
        setPositiveFeedback(state)
        if(state){
            if(operation === 'create-table'){
                setTextFeedback('La mesa ha sido creada exitosamente')
            }
        } else {
            if(operation === 'create-table'){
                setTextFeedback('No se pudo crear la mesa. Por favor, intente de nuevo')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }

    const onDeleteSector = (sector) => {
        const hasOrders = props.grid.some(s => {
            if(s.id === sector.id){
                return s.tables.some(t => t.state !== 'free')
            }
        })
    }

    return (<>
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                <ThemeProvider theme={themeButtonWine}>
                    <Grid item sx={{marginTop: '5px', marginBottom: '5px'}}>
                        <Button 
                            variant={'contained'}
                            onClick={onNewSector}>
                            + Sector
                        </Button>
                    </Grid>
                    <Grid item sx={{marginTop: '5px', marginBottom: '5px'}}>
                        <Button
                            variant={'contained'}
                            onClick={onNewTable}>
                            + Mesa
                        </Button>
                    </Grid>
                </ThemeProvider>
            </Grid>
            <Grid 
                container
                sx={{
                    border: '1px solid gray',
                    borderRadius: '10px'
                }}>
                {props.grid.map((sector, index) => (
                    <Grid item key={index} xs={12}>
                        <Sector 
                            sector={sector}
                            onUpdate={props.updateSector}
                            onDelete={onDeleteSector}
                            onTableClick={props.onTableClick}/>
                    </Grid>
                ))}
            </Grid>

            <TableForm
                open={openTableForm}
                sectors={sectors}
                restaurantId={props.restaurantId}
                onClose={() => setOpenTableForm(false)}
                onSubmit={createTable}
                isNew={true}/>

            <SectorForm
                open={openSectorForm}
                restaurantId={props.restaurantId}
                onClose={() => setOpenSectorForm(false)}
                onSubmit={props.createSector}/>

            <Loader open={loading}/>

            <FeedbackDialog
                open={openFeedbackDialog}
                positive={positiveFeedback}
                text={textFeedback}
                onClose={closeFeedback}/>

        </Container>
    </>)
}

TableSchema.defaultProps =
{
    sectors: [],
    grid: [],
    onTableClick: function(){},
    createTable: function(){},
    restaurantId: 0,
    createSector: function(){},
    updateSector: function(){},
    deleteSector: function(){}
}

TableSchema.propTypes =
{
    sectors: PropTypes.array,
    grid: PropTypes.array,
    onTableClick: PropTypes.func,
    createTable: PropTypes.func,
    restaurantId: PropTypes.number,
    createSector: PropTypes.func,
    updateSector: PropTypes.func,
    deleteSector: PropTypes.func
}