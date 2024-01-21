import * as React from "react";
import PropTypes from "prop-types";
import { 
    Grid, 
    Container,
    Button
} from '@mui/material'
import { Sector } from "./Sector";

export const TableSchema = ( props: any ) => {
    return (<>
        <Container maxWidth={false}>
            <Grid>
                <Button>+ Mesa</Button>
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
