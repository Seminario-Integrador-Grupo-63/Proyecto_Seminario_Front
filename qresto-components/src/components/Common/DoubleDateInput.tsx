import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';
import { 
    TextField,
    Button,
    Grid 
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';


export const DoubleDateInput = forwardRef((props: any, ref: any) => {
    const [date1, setDate1] = useState<any>('');
    const [date2, setDate2] = useState<any>('');

    useImperativeHandle(ref, () => ({
        clear(){
            setDate1('')
            setDate2('')
        },

        setDate1(date1: Date){
            const timeZoneOffset = date1.getTimezoneOffset();
            date1.setMinutes(date1.getMinutes() + timeZoneOffset);
            setDate1(dayjs(date1))
        },

        setDate2(date2: Date){
            const timeZoneOffset = date2.getTimezoneOffset();
            date2.setMinutes(date2.getMinutes() + timeZoneOffset);
            setDate2(dayjs(date2))
        },

        getDates(){
            return buildDates()
        }
    }))

    const handleDate1 = (date: any) => {
        if (date) {
            setDate1(date);
          } else {
            setDate1('');
          }
    };
  
    const handleDate2 = (date: any) => {
        if (date) {
            setDate2(date); 
          } else {
            setDate2('');
          }
    };

    const onSubmit = () => {
        const dates = buildDates()
        props.onSubmit(dates.date1, dates.date2)
    };

    const buildDates = () => {
        let d1 = null
        let d2 = null
        if(date1 != ''){
            d1 = date1.toDate()
        }

        if(date2 != ''){
            d2 = date2.toDate()
        }
        return {date1: d1, date2: d2}
    }
  
    return (<>
        <h2>{props.title}</h2>
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        sx={{ width: '100%'}}
                        slotProps={{
                            textField: {
                                error: false,
                            },
                            actionBar: {
                                actions: ['clear'],
                            }
                        }}
                        onChange={handleDate1} 
                        value={date1}
                        format="DD-MM-YYYY"/>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={5}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        sx={{ width: '100%' }}
                        slotProps={{
                            textField: {
                                error: false,
                            },
                            actionBar: {
                                actions: ['clear'],
                            }
                        }}
                        value={date2}
                        onChange={handleDate2} 
                        format="DD-MM-YYYY"/>
                </LocalizationProvider>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={onSubmit}>
                    {props.buttonText}
                </Button>
            </Grid>
        </Grid>
    </>);
})

DoubleDateInput.defaultProps =
{
    date1Text: "Start date",
    date2Text: "End date",
    onSubmit: null,
    buttonText: "Filter",
    title: "Filter",
}

DoubleDateInput.propTypes = 
{
    date1Text: PropTypes.string,
    date2Text: PropTypes.string,
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    title: PropTypes.string,
}

/**
const onAction = () => {

}
console.log("")
console.log(": ", )

 */


