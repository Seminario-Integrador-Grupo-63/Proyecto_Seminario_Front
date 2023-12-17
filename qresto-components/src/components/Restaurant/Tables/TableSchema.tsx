import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import * as React from "react";
import List from "@mui/material/List";
import {TableGrid} from "@/Restaurant/Tables/TableGrid";
import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";


function createSection(
    name: string,
    tables: Array<any>,
) {
    return { name, tables };
}
function createTable(
    name: string,
) {
    return { name};
}

const rows = [
    createSection('Terraza', [createTable("Mesa 1"), createTable("Mesa 2")]),
    createSection('Patio', [createTable("Mesa 3"), createTable("Mesa 4")]),
    createSection('Interior', [createTable("Mesa 5"), createTable("Mesa 6")]),
];

export const TableSchema = ( props: any ) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <List>
                {props.sections.map((section) =>(
                    <ListItem>
                        <TableGrid tables={section.tables} sectionName={section.name}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}


TableSchema.defaultProps =
    {
        sections: [
            createSection('Terraza', [createTable("Mesa 1"), createTable("Mesa 2"), createTable("Mesa 1"), createTable("Mesa 1"), createTable("Mesa 1")]),
            createSection('Patio', [createTable("Mesa 3"), createTable("Mesa 4")]),
            createSection('Interior', [createTable("Mesa 5"), createTable("Mesa 6")]),
        ],
    }

TableSchema.propTypes =
    {
        sections: PropTypes.array,
    }
