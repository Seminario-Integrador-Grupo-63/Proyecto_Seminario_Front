import {CustomerContainer} from "@/Customer/CustomerContainer/CustomerContainer";
import {CustomerHeader} from "@/Customer/CustomerHeader/CustomerHeader";
import {Footer} from "@/Customer/Footer/Footer";
import React from "react";
import {theme} from "@/Common/Theme/themes";
import {Box, FormControlLabel, Typography} from "@mui/material";
import {BillAll} from "@/Customer/BillCheckout/BillAll";
import {BillSwitch} from "@/Customer/BillCheckout/BillSwitch";
import AppBar from "@mui/material/AppBar";
import {BillEach} from "@/Customer/BillCheckout/BillEach";
import PropTypes from "prop-types";
import {ListOrders} from "@/Customer/ListOrders/ListOrders";

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
            >
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
                                sx={{
                                    marginLeft: '20px'
                                }}
                            />}
                        label={
                            <Typography
                                variant={'h6'}
                                sx={{
                                    color: theme.palette.secondary.main,
                                }}>
                                {`${checked? 'Por persona':'Por igual'}`}
                            </Typography>
                        }
                    />
                </AppBar>
            </CustomerHeader>

            <Box
            sx={{
                width: { sm: `100%` },
            }}>

                <BillEach>

                </BillEach>
                <BillAll>

                </BillAll>
            </Box>

            <Footer
                text={`Total: ${props.total}`}
                buttonVisible={false}
            />
        </CustomerContainer>
    </>);
}

BillCheckout.defaultProps =
    {
        total: 12
    }

BillCheckout.propTypes =
    {
        total: PropTypes.number
    }
