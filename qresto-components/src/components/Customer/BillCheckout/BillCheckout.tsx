import {CustomerContainer} from "@/Customer/CustomerContainer/CustomerContainer";
import {CustomerHeader} from "@/Customer/CustomerHeader/CustomerHeader";
import {Footer} from "@/Customer/Footer/Footer";
import React from "react";
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

    return (<>
        <CustomerContainer>
            <CustomerHeader
                goBackEnabled={true}
                title={'Cuenta'}
            />

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
                                sx={{marginLeft: '20px'}}
                            />}
                        label={
                            <Typography
                                variant={'h6'}
                                sx={{color: theme.palette.secondary.main,}}>
                                {`${checked? 'Por persona':'Por igual'}`}
                            </Typography>
                        }
                    />
                </AppBar>
                {checked? <BillEach/> : <BillAll/>}
            </CustomerContainer>

            <Footer
                text={`Total: ${props.total}`}
                buttonVisible={false}
            />
        </CustomerContainer>
    </>);
}

BillCheckout.defaultProps =
    {
        orders: [],
        total: 0,
    }

BillCheckout.propTypes =
    {
        orders: PropTypes.array,
        total: PropTypes.number
    }

