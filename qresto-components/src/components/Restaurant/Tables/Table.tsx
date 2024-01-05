import * as React from 'react';
import {Button} from "@mui/material";
// import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
// import propTypes = SliderValueLabel.propTypes;
import PropTypes from 'prop-types';

export const Table = (props: any) => {
    if(props.table !== null){
        return (
            <React.Fragment>
                <Button 
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
    // stateColor: "black",
    // tableName: "Mesa",
    table: null,
    tableId: 0,
    onClickTable: function (){},
}

Table.propTypes =
{
    // stateColor: PropTypes.string,
    // tableId: PropTypes.string,
    onCLickTable: PropTypes.func,
    tableId: PropTypes.string,
    table: PropTypes.object
}
