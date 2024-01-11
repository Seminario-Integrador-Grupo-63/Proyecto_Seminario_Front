import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import EditIcon from '@mui/icons-material/Edit';

export const DataTable = (props: any) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [headers, setHeaders] = useState([])
    // const [rows, setRows] = useState([])
  
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }
  
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0)
    }

    useEffect(() => {
        setActions();
    }, [props.headers, props.actions]);

    const setActions = () => {
        if(props.actions){
            const hasActions = headers.some(header => header.key == 'actions')
            if(!hasActions){
                let h = props.headers
                h.push({label: 'Actions', key: 'actions'})
                setHeaders(h)
            }
        }
    }

    const onEdit = (row) => {
        props.onEdit(row)
    }

    const onDelete = (row) => {
        props.onDelete(row)
    }

    const onShow = (row) => {
        props.onShow(row)
    }

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {headers.map((header, index) => (
                                <TableCell
                                    key={index}>
                                    {header.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, rowIndex) => (
                            <TableRow hover role="checkbox" tabIndex={-1} key={"row" + rowIndex}>
                                {headers.map((header, cellIndex) => (
                                <TableCell key={"cell" + cellIndex}>
                                    {header.key === 'actions' ? (
                                    /* Render content for 'actions' header */
                                    <>
                                        {props.actionsType === 'edit-delete' ? (
                                            <>
                                                <IconButton 
                                                    aria-label="edit"
                                                    onClick={() => onEdit(row)}>
                                                    <EditIcon/>
                                                </IconButton>

                                                <IconButton 
                                                    aria-label="delete"
                                                    onClick={() => onDelete(row)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </>
                                            ) : (
                                            <>
                                                <IconButton 
                                                    aria-label="show"
                                                    onClick={() => onShow(row)}>
                                                    <LaunchIcon/>
                                                </IconButton>
                                            </>
                                        )}
                                    </>
                                    ) : (
                                        /* Render regular cell content */
                                        row[header.key]
                                    )}
                                </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}/>
        </Paper>
    )
}

DataTable.defaultProps =
{
    headers: [],
    rows: [],
    actions: true,
    actionsType: 'edit-delete',
    onEdit: function(){},
    onDelete: function(){},
    onShow: function(){}
}

DataTable.propTypes =
{
    headers: PropTypes.array,
    /**
    headers = [
        {title: "Header 1", key: header1},
        {title: "Another Header", key: anotherHeader},
        ...
    ]
    */

    rows: PropTypes.array,
    /**
    rows = [
        {header1: "value 1A", anotherHeader: "value 1B"},
        {header1: "value 2A", anotherHeader: "value 2B"},
        ...
    ]
    */

    actions: PropTypes.bool,
    actionsType: PropTypes.oneOf(['edit-delete', 'show']),
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onShow: PropTypes.func
}


