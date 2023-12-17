import Box from "@mui/material/Box";
import * as React from "react";
import List from "@mui/material/List";
import {TableGrid} from "@/Restaurant/Tables/TableGrid";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";


export const TableSchema = ( props: any ) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <List>
                {props.sectors.map((sector) =>(
                    <ListItem>
                        <TableGrid tables={sector.tables} sectorName={sector.sector}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}


TableSchema.defaultProps =
    {
        sectors: [],
    }

TableSchema.propTypes =
    {
        sectors: PropTypes.array,
    }
