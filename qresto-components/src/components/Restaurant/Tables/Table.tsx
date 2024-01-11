import * as React from 'react';
import {Button} from "@mui/material";
// import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
// import propTypes = SliderValueLabel.propTypes;
import PropTypes from 'prop-types';
import { PanToolSharp } from '@mui/icons-material';

export const Table = (props: any) => { 
    const onClick = () => {
        props.onClick(props.table)
    }

    if(props.table !== null){
        return (
            <React.Fragment>
                <Button 
                    onClick={onClick}
                    sx={{
                        border: '1px solid gray',
                        backgroundColor:'#D9D9D9',
                        color: 'black',
                        borderRadius: '8px',
                        margin: '20px',
                        width: '100px',
                        height: '100px'
                    }}>
                    {props.tableId}
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
    tableId: 0,
    onClickTable: function (){},
    onClick: function(){}
}

Table.propTypes =
{
    onCLickTable: PropTypes.func,
    tableId: PropTypes.string,
    table: PropTypes.object,
    onClick: PropTypes.func
}
