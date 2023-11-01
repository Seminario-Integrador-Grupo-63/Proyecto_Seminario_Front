import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import {IconButton} from "@mui/material";
import {UsersEdit} from "@/Restaurant/Users/UsersEdit";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";


/*
"id": 0,
    "name": "string",
    "description": "string",
    "image": "string", NO VA
    "preparationTime": 0,
    "category": 0,
    "price": 0,
    "restaurant": 0 NO VA
*/

const editIcon = (id: number) => {
    return(
        <IconButton onClick={() => {return( <UsersEdit/> )}}>
            <EditIcon color="primary" />
        </IconButton>
    )};
const deleteIcon = (id: number) => {
    return(
        <IconButton onClick={() => {}}>
            <DeleteIcon color="primary"/>
        </IconButton>
    )};

function createData(
    name: string,
    description: string,
    preparationTime: number,
    price: number,
) {
    return {name, description, preparationTime, price };
}
export const SideDishTable = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Descripción</TableCell>
                        <TableCell align="right">Tiempo de preparacion</TableCell>
                        <TableCell align="right">Precio</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.sideDishes.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell>{row.description}</TableCell>
                            <TableCell>{row.preparationTime}</TableCell>
                            <TableCell>{row.price}</TableCell>

                            <TableCell align="right">{editIcon(row.id)}{deleteIcon(row.id)}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

SideDishTable.defaultProps =
    {
        sideDishes: [
            createData("hola", "xD", 34, 65),
            createData("xDDDDD", "dwas", 864, 54),
        ]
    }

SideDishTable.propTypes =
    {
        sideDishes: PropTypes.array
    }
