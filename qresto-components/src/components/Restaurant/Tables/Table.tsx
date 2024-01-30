import * as React from 'react'
import {useState, useEffect} from 'react'
import {Button} from "@mui/material";
import PropTypes from 'prop-types';

export const Table = (props: any) => { 
    const [tableColor, setTableColor] = useState('gray')

    useEffect(() => {
        switch (props.table.state) {
            case 'occupied':
                setTableColor('#FFD130') // Amarillo
                break;
            case 'waiting':
                setTableColor('#22A900') // Verde
                break;
            case 'payment_ready':
                setTableColor('#1290B8') // Azul
                break;
            default:
                setTableColor('#D9D9D9') // Gris
        }
    }, [props.table])

    const onClick = () => {
        props.onClick(props.table)
    }

    if(props.table !== null){
        return (
            <React.Fragment>
                <Button 
                    onClick={onClick}
                    sx={{
                        border: '1px solid ' + tableColor,
                        backgroundColor: tableColor,
                        color: 'black',
                        borderRadius: '8px',
                        margin: '20px',
                        width: '100px',
                        height: '100px'
                    }}>
                    {props.table.number}
                </Button>
            </React.Fragment>
        )
    } else {
        return (<></>)
    }
}

Table.defaultProps =
{
    table: null,
    onClickTable: function (){},
    onClick: function(){}
}

Table.propTypes =
{
    onCLickTable: PropTypes.func,
    table: PropTypes.object,
    onClick: PropTypes.func
}
