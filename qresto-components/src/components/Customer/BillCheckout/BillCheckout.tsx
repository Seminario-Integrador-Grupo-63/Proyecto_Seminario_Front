import {CustomerContainer} from "@/Customer/CustomerContainer/CustomerContainer";
import {CustomerHeader} from "@/Customer/CustomerHeader/CustomerHeader";
import {Footer} from "@/Customer/Footer/Footer";
import React, {useEffect} from "react";
import {theme} from "@/Common/Theme/themes";
import {FormControlLabel, Typography} from "@mui/material";
import {BillAll} from "@/Customer/BillCheckout/BillAll";
import {BillSwitch} from "@/Customer/BillCheckout/BillSwitch";
import AppBar from "@mui/material/AppBar";
import {BillEach} from "@/Customer/BillCheckout/BillEach";
import PropTypes from "prop-types";

export const BillCheckout = (props: any) => {
    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const calculateTotal = () => {
        let total = 0
        props.billData.forEach(customerBill => {
            total += customerBill.customerTotal
        })
        return total
    }

    const processData = () => {
        
    }

    return (<>
        <CustomerContainer>
            <CustomerHeader
                goBackEnabled={false}
                title={'Cuenta'}/>

            <CustomerContainer>
                <AppBar
                    position="relative"
                    sx={{
                        backgroundColor: theme.palette.warning.contrastText,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                    <FormControlLabel
                        control={
                            <BillSwitch
                                color={'default'}
                                checked={checked}
                                onChange={handleChange}
                                name="switch"
                                sx={{marginLeft: '20px'}}/>
                        }
                        label={
                            <Typography
                                variant={'h6'}
                                sx={{color: theme.palette.secondary.main,}}>
                                {`${checked? 'Por persona':'Por igual'}`}
                            </Typography>
                        }
                    />
                </AppBar>
                {checked? 
                    <BillEach billData={props.billData}/> 
                : 
                    <BillAll billData={props.billData}/>
                }
            </CustomerContainer>

            <Footer
                text={"Total: $" + calculateTotal()}
                buttonVisible={false}/>
        </CustomerContainer>
    </>);
}

BillCheckout.defaultProps = {
    billData: [],
}

BillCheckout.propTypes = {
    billData: PropTypes.array,
}

