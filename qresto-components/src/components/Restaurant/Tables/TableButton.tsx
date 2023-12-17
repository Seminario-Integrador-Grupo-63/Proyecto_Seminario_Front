import * as React from 'react';
import {Button} from "@mui/material";
import SliderValueLabel from "@mui/material/Slider/SliderValueLabel";
import propTypes = SliderValueLabel.propTypes;


// Modificar botón

export default function TableButton (props: any) {
    return (
    <React.Fragment>
        <Button
        >{props.tableName}
        </Button>
    </React.Fragment>
)
}

TableButton.defaultProps =
    {
        stateColor: "black",
        tableName: "Mesa",
        onClickTable: function (){},
    }

TableButton.propTypes =
    {
        stateColor: propTypes.String,
        tableName: propTypes.String,
        onCLickTable: propTypes.function,
    }
