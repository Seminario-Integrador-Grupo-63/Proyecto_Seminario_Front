import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material'
import {Table} from './Table'

export const Sector = (props: any) => {
    // const onTableClick = (table) => {
    //     const sector = {
    //         id: table.sector,
    //         name: props.sector,
    //         table: table
    //     }
    //     props.onTableClick(sector)
    // }

    if(props.sector !== null){
        return (<>
            <Grid container>
                <Grid item xs={12} sx={{marginTop: '10px', marginBottom: '10px'}}>
                    <Typography sx={{marginLeft: '20px'}} variant='h6'>
                        {props.sector.sector}
                    </Typography>
                    {props.sector.tables.map((table, index) => (
                        <Table 
                            table={table} 
                            key={index + 1}
                            onClick={props.onTableClick}/>
                    ))}
                </Grid>
            </Grid>
        </>)
    } else {
        return null
    }
}

Sector.defaultProps =
{
    sector: null,
    onTableClick: function(){}
}

Sector.propTypes =
{
    sector: PropTypes.object,
    onTableClick: PropTypes.func
}


