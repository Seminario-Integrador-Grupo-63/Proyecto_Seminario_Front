import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material'

export const CustomTextField = (props: any) => {
    /**
    Resources
    https://stackoverflow.com/questions/70641719/material-ui-change-textfield-initial-color
    https://stackoverflow.com/questions/46173259/how-can-i-change-textfield-underline-hover-color-by-theme-palette
    */
    
    const [input, setInput] = useState('')

    const style = {
        labelColor: props.labelColor,
        focusedLabelColor: props.focusedLabelColor,
        lineColor: props.lineColor,
        focusedLineColor: props.focusedLineColor,
        hoverLineColor: props.hoverLineColor
    }
    const onChange = (event: any) => {
        setInput(event.target.value)
    }

    useEffect(() => {
        props.onChange(input)
    }, [input])

    if(props.color !== null){
        style.labelColor = props.color.dark
        style.focusedLabelColor = props.color.main
        style.lineColor = props.color.dark
        style.focusedLineColor = props.color.main
        style.hoverLineColor = props.color.dark
    }

    return(<>
        <TextField
            variant="standard"
            value={input}
            label={props.label}
            onChange={onChange}
            sx={{
                "& label": {
                    color: style.labelColor
                },

                "&:hover label": {
                    // fontWeight: props.fontWeight
                },

                "& label.Mui-focused": {
                    color: style.focusedLabelColor
                },

                "& .MuiInput-underline:after": {
                    borderColor: style.focusedLineColor
                },

                "&:hover .MuiInput-underline:before": {
                    color: style.hoverLineColor,
                    borderBottom: "3px solid green"
                },

                "&:hover div:before": {
                    borderBottom: "2px solid " + style.hoverLineColor + " !important"
                },

                "& .MuiInput-underline:before": {
                    borderBottomColor: style.lineColor,
                    borderColor: style.lineColor,
                },

                "& .MuiInput-underline": {
                    borderBottomColor: style.lineColor
                },

                "& .MuiInput-input": {
                    color: style.focusedLineColor,
                    borderBottomColor: style.hoverLineColor
                },

                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "white"
                    },

                    "&:hover fieldset": {
                        borderColor: "white",
                        borderWidth: 2
                    },

                    "&.Mui-focused fieldset": {
                        borderColor: "white"
                    }
                }
            }}/>
    </>)
}

CustomTextField.defaultProps =
{
    variant: 'standard',
    label: 'Label',
    labelColor: 'black',
    focusedLabelColor: 'black',
    lineColor: 'gray',
    focusedLineColor: 'black',
    hoverLineColor: 'blue',
    color: null,
    value: '',
    onChange: function(){}
}

CustomTextField.propTypes = 
{
    variant: PropTypes.oneOf(["standard", "outlined"]),
    label: PropTypes.string,
    labelColor: PropTypes.string,
    focusedLabelColor: PropTypes.string,
    lineColor:  PropTypes.string,
    focusedLineColor: PropTypes.string,
    hoverLineColor: PropTypes.string,
    color: PropTypes.shape({
        light: PropTypes.string,
        main: PropTypes.string,
        dark: PropTypes.string,
        contrastText: PropTypes.string
    }),
    value: PropTypes.string,
    onChange: PropTypes.func
}

