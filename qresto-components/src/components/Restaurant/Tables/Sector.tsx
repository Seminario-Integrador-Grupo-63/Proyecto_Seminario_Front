import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material'
import {Table} from './Table'

export const Sector = (props: any) => {
    if(props.sector !== null){
        return (<>
            <Grid container>
                <Grid item xs={12} sx={{marginTop: '10px', marginBottom: '10px'}}>
                    <Typography sx={{marginLeft: '20px'}} variant='h6'>
                        {props.sector.name}
                    </Typography>
                    {props.sector.tables.map((table, index) => (
                        <Table 
                            table={table} 
                            tableId={(index + 1).toString()}
                            key={index + 1}/>
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
    sector: null
}

Sector.propTypes =
{
    sector: PropTypes.object
}


