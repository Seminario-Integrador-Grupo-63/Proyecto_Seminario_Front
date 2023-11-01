import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import {UsersEdit} from "@/Restaurant/Users/UsersEdit";

const editIcon = (id: number) => {
    return(
    <IconButton onClick={() => {return( <UsersEdit/> )}}>
        <EditIcon color="primary" />
    </IconButton>
)};

export const UsersTable = (props: any) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">

                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="right">Permisos</TableCell>
                        <TableCell align="right">Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {props.users.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell>{row.permissions}</TableCell>

                            <TableCell>{editIcon(row.id)}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

UsersTable.defaultProps =
    {
        users: [{name: "dawd", permissions: "dasdw"}]
    }

UsersTable.propTypes =
    {
        users: PropTypes.array,
    }
