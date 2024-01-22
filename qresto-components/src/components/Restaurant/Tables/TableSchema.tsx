import * as React from "react";
import PropTypes from "prop-types";
import { 
    Grid, 
    Container,
    Button,
    ThemeProvider
} from '@mui/material'
import { Sector } from "./Sector";
import { themeButtonWine } from "@/Common/Theme/themes";

export const TableSchema = ( props: any ) => {
    return (<>
        <Container maxWidth={false}>
            <Grid container spacing={2}>
                <ThemeProvider theme={themeButtonWine}>
                    <Grid item sx={{marginTop: '5px', marginBottom: '5px'}}>
                        <Button 
                            variant={'contained'}>
                            + Sector
                        </Button>
                    </Grid>
                    <Grid item sx={{marginTop: '5px', marginBottom: '5px'}}>
                        <Button
                            variant={'contained'}>
                            + Mesa
                        </Button>
                    </Grid>
                </ThemeProvider>
            </Grid>
            <Grid 
                container
                sx={{
                    border: '1px solid gray',
                    borderRadius: '10px'
                }}>
                {props.sectors.map((sector, index) => (
                    <Grid item key={index} xs={12}>
                        <Sector 
                            sector={sector} 
                            onTableClick={props.onTableClick}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    </>)
}

TableSchema.defaultProps =
{
    sectors: [],
    onTableClick: function(){}
}

TableSchema.propTypes =
{
    sectors: PropTypes.array,
    onTableClick: PropTypes.func
}