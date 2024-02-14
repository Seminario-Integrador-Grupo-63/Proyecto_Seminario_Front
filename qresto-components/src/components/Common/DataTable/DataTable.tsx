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
import CancelIcon from '@mui/icons-material/Cancel';
import { EnhancedTableHead } from './EnhancedTableHead'

export const DataTable = (props: any) => {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [headers, setHeaders] = useState([])
    const [rows, setRows] = useState([])
    const [parsedRows, setParsedRows] = useState([])

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('time');
    const [selected, setSelected] = useState([]);
    const [dense, setDense] = useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }
  
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0)
    }

    useEffect(() => {
        setActions();
    }, [props.headers, props.actions]);

    useEffect(() => {
        let parsedRows = []
        if(props.headers.length > 0){
            parsedRows = parseRows(props.rows, props.headers)
        
        }
        setParsedRows(parsedRows)
        setRows(props.rows)
    }, [props.rows])

    const setActions = () => {

        if(props.actions){
            setHeaders([...props.headers, {label: 'Acciones', id: 'actions'}])
        } else {
            setHeaders([...props.headers])
        }
    }    

    const parseRows = (rows, headers) => {
        let priceHeaders = getPriceHeaders(headers)
        let parsedRows = rows.map(row => {
            let parsedRow = {...row}
            priceHeaders.forEach(priceHeader => {
                parsedRow[priceHeader.id] = '$' + row[priceHeader.id]
            })

            return parsedRow
        })
        return parsedRows
    }

    const getPriceHeaders = (headers) => {
        let priceHeaders = []
        headers.forEach((header, index) => {
            if(header.price !== undefined){
                if(header.price){
                    priceHeaders.push(header)
                }
            }
        })

        return priceHeaders
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

    const onCancel = (row) => {
        props.onCancel(row)
    }

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
        sortTable(property, isAsc)
    }

    const sortTable = (property, isAsc) => {
        props.rows.sort((a, b) => {
            let comparison = 0;
            if (a[property] < b[property]) {
                comparison = -1;
            } else if (a[property] > b[property]) {
                comparison = 1;
            }
            return isAsc ? comparison : -comparison;
        })

        setParsedRows(parseRows(props.rows, props.headers))
    }

    const renderActions = (row) => {
        if (props.actionsType === 'show'){
            return (<>
                <IconButton 
                    aria-label="show"
                    onClick={() => onShow(row)}>
                    <LaunchIcon/>
                </IconButton>
            </>)
        } else if(props.actionsType === 'cancel'){
            return(<>
                <IconButton 
                    aria-label="cancel"
                    onClick={() => onCancel(row)}>
                    <CancelIcon/>
                </IconButton>
            </>)
        } else if (props.actionsType === 'show-cancel'){
            return(<>
                <IconButton 
                    aria-label="show"
                    onClick={() => onShow(row)}>
                    <LaunchIcon/>
                </IconButton>

                <IconButton 
                    aria-label="cancel"
                    onClick={() => onCancel(row)}>
                    <CancelIcon/>
                </IconButton>
            </>)
        }else {
            return (<>
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
            </>)
        }
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
          const newSelected = rows.map((n) => n.id);
          setSelected(newSelected);
          return;
        }
        setSelected([]);
    }
    
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: props.maxHeight }}>
                <Table stickyHeader aria-label="sticky table">
                    <EnhancedTableHead
                        headers={headers}
                        numSelected={selected.length}
                        orderBy={orderBy}
                        order={order}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={handleRequestSort}
                        rowCount={parsedRows.length}/>

                    <TableBody>
                        {parsedRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, rowIndex) => (

                            <TableRow hover role="checkbox" tabIndex={-1} key={"row" + rowIndex}>
                                {headers.map((header, cellIndex) => (
                                <TableCell key={"cell" + cellIndex}>
                                    {header.id === 'actions' ? (
                                        renderActions(row)
                                    ) : (
                                        /* Render regular cell content */
                                        row[header.id]
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
                labelRowsPerPage={"Filas por página"}
                count={parsedRows.length}
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
    maxHeight: 440,
    onEdit: function(){},
    onDelete: function(){},
    onShow: function(){},
    onCancel: function(){}
}

DataTable.propTypes =
{
    headers: PropTypes.array,
    /**
    headers = [
        {label: "Header 1", id: "header1"},
        {label: "Another Header", id: "anotherHeader"},
        ...
    ]

    headersWithOptionalFields = [
        {
            label: "Header 1", 
            id: "header1", 
            price: false,
            numeric: true, 
            disablePadding: false
        },
        {
            label: "Another Header", 
            id: "anotherHeader",
            price: true, 
            numeric: false, 
            disablePadding: true
        },
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
    actionsType: PropTypes.oneOf(['edit-delete', 'show', 'cancel', 'show-cancel']),
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onShow: PropTypes.func,
    onCancel: PropTypes.func,
    maxHeight: PropTypes.any
}

