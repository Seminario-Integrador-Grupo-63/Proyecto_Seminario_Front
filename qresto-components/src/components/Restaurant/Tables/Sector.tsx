import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { 
    Grid,
    Typography,
    TextField,
    IconButton
} from '@mui/material'
import {Table} from './Table'
import DeleteIcon from '@mui/icons-material/Delete';
import {theme} from '@/Common/Theme/themes'
import { MessageDialog } from '@/Common/MessageDialog';

export const Sector = (props: any) => {
    const [editSector, setEditSector] = useState(false)
    const textFieldRef = useRef<HTMLInputElement>(null)
    const [sectorName, setSectorName] = useState('')
    const [openMessageDialog, setOpenMessageDialog] = useState(false)
    const [titleMessageDialog, setTitleMessageDialog] = useState('')
    const [descriptionMessageDialog, setDescriptionMessageDialog] = useState('')
    const [actionMessageDialog, setActionMessageDialog] = useState('')
    const [submitTextMessageDialog, setSubmitTextMessageDialog] = useState('Confirmar')
    const [cancelButtonVisibleMessageDialog, setCancelButtonVisibleMessageDialog] = useState(true)

    useEffect(() => {
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    }, [editSector])

    const onNameClick = () => {
        setEditSector(true)
        setSectorName(props.sector.name)
        if (textFieldRef.current) {
            textFieldRef.current.focus();
        }
    }

    const onNameUnfocus = () =>{
        let sector = {
            id: props.sector.id,
            name: sectorName,
            restaurant: props.sector.restaurant
        }
        setEditSector(false)
        props.onUpdate(sector)
    }

    const handleNameChange = (event) => {
        setSectorName(event.target.value)
    }

    const onDelete = () => {
        const hasOrders = props.sector.tables.some(t => t.state !== 'free')
        if(!hasOrders){
            setActionMessageDialog('delete-sector')
            setTitleMessageDialog("Este sector se eliminará")
            setDescriptionMessageDialog('Esta seguro que desea eliminar este sector? Esta acción es permanente')
            setCancelButtonVisibleMessageDialog(true)
            setSubmitTextMessageDialog('Confirmar')
            setOpenMessageDialog(true)
        } else {
            setActionMessageDialog('close')
            setTitleMessageDialog("No se puede eliminar el sector")
            setCancelButtonVisibleMessageDialog(false)
            setSubmitTextMessageDialog('Aceptar')
            setDescriptionMessageDialog('No se puede eliminar el sector mientras tenga órdenes')
            setOpenMessageDialog(true)
        }
    }

    const submitMessageDialog = () => {
        if(actionMessageDialog === 'delete-sector'){
            props.onDelete(props.sector.id)
        } else if (actionMessageDialog === 'close'){
            setOpenMessageDialog(false)
        }
    }

    if(props.sector !== null){
        return (<>
            <Grid container>
                <Grid item xs={11} sx={{marginTop: '10px', marginBottom: '10px'}}>
                    <Grid item>
                        {editSector?
                            <TextField 
                                onBlur={onNameUnfocus}
                                value={sectorName}
                                onChange={handleNameChange}
                                sx={{marginLeft: '20px'}} 
                                size={'small'}
                                inputRef={textFieldRef}/>
                        :
                            <Typography 
                                sx={{marginLeft: '20px', width: '30%'}} 
                                variant='h6'
                                onClick={onNameClick}>
                                {props.sector.name}
                            </Typography>
                        }
                    </Grid>
                    {props.sector.tables.map((table, index) => (
                        <Table 
                            table={table} 
                            key={index + 1}
                            onClick={props.onTableClick}/>
                    ))}
                </Grid>
                {/** Puede servir si queremos implementar 
                 * el borrado físico de sectores a futuro 
                 */}
                {/* <Grid 
                    item 
                    xs={1} 
                    sx={{
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignContent: 'center',
                        justifyContent: 'center'}}>
                    <IconButton
                        sx={{
                            marginRight: '20px'
                        }}
                        onClick={onDelete}>
                        <DeleteIcon 
                            fontSize='large'
                            sx={{
                                color: theme.palette.primary.main,
                            }}/>
                    </IconButton>
                </Grid> */}
            </Grid>

            <MessageDialog 
                open={openMessageDialog}
                submitButtonText={submitTextMessageDialog}
                cancelButtonVisible={cancelButtonVisibleMessageDialog}
                title={titleMessageDialog}
                onSubmit={submitMessageDialog}
                description={descriptionMessageDialog}
                onClose={() => setOpenMessageDialog(false)}/>
            
        </>)
    } else {
        return null
    }
}

Sector.defaultProps =
{
    sector: null,

    onTableClick: function(){},
    onUpdate: function(){},
    onDelete: function(){}
}

Sector.propTypes =
{
    sector: PropTypes.object,
    onTableClick: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func
}


