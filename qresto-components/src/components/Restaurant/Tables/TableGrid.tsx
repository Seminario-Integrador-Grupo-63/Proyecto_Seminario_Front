import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PropTypes from "prop-types";
import TableButton from "@/Restaurant/Tables/TableButton";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const TableGrid = ( props: any ) => {
    return (
        <React.Fragment>
            <Box>
                <Typography>
                    {props.sectionName}
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {props.tables.map((table) => (
                        <Grid item xs={6} sm={3}>
                            <Item>
                                <TableButton tableName={table.name}/>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </React.Fragment>
    );
}


TableGrid.defaultProps =
    {
        sectionName: "",
        tables: [],
    }

TableGrid.propTypes =
    {
        sectionName: PropTypes.string,
        tables: PropTypes.array,
    }
