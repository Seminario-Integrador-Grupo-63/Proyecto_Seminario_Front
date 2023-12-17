import Box from "@mui/material/Box";
import * as React from "react";
import List from "@mui/material/List";
import {TableGrid} from "@/Restaurant/Tables/TableGrid";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";


function createSector(
    sector: string,
    tables: Array<any>,
) {
    return { sector, tables };
}
function createTable(
    name: string,
) {
    return { name};
}

const rows = [
    createSector('Terraza', [createTable("Mesa 1"), createTable("Mesa 2")]),
    createSector('Patio', [createTable("Mesa 3"), createTable("Mesa 4")]),
    createSector('Interior', [createTable("Mesa 5"), createTable("Mesa 6")]),
];

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
        sectors: [
            createSector('Terraza', [createTable("Mesa 1"), createTable("Mesa 2"), createTable("Mesa 1"), createTable("Mesa 1"), createTable("Mesa 1")]),
            createSector('Patio', [createTable("Mesa 3"), createTable("Mesa 4")]),
            createSector('Interior', [createTable("Mesa 5"), createTable("Mesa 6")]),
        ],
    }

TableSchema.propTypes =
    {
        sectors: PropTypes.array,
    }
