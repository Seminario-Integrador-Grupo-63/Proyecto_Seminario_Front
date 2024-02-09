import {
    TableHead,
    TableRow,
    TableCell,
    Checkbox,
    TableSortLabel,
    Box
} from '@mui/material'
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';

export const EnhancedTableHead = (props) => {
    /**
    https://mui.com/material-ui/react-table/#sorting-amp-selecting
    */

    const createSortHandler = (property) => (event) => {
        props.onRequestSort(event, property);
    }

    const setAlignTableCell = (header) => {
        if(header.numeric !== undefined){
            if(header.numeric){
                return 'right'
            }
        }
        return 'left'
    }

    const setPaddingTableCell = (header) => {
        if(header.disablePadding !== undefined) {
            if(header.disablePadding){
                return 'none'
            }
        }
        return 'normal'
    }
  
    return (
        <TableHead>
            <TableRow>
                {props.selectable ? (
                    <TableCell padding="checkbox">
                        <Checkbox
                            color="primary"
                            indeterminate={props.numSelected > 0 && props.numSelected < props.rowCount}
                            checked={props.rowCount > 0 && props.numSelected === props.rowCount}
                            onChange={props.onSelectAllClick}
                            inputProps={{'aria-label': 'select all'}}/>)

                    </TableCell>)
                :
                    null
                }
                {props.headers.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={setAlignTableCell(headCell)}
                        padding={setPaddingTableCell(headCell)}
                        sortDirection={props.orderBy === headCell.id ? props.order : false}>
                        <TableSortLabel
                            active={props.orderBy === headCell.id}
                            direction={props.orderBy === headCell.id ? props.order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {props.orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {props.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>)
                            : 
                                null
                            }
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.defaultProps =
{
    numSelected: 0,
    onSelectAllClick: function(){},
    onRequestSort: function(){},
    // rowCount: PropTypes.number
    selectable: false,
    order: 'asc',
    orderBy: '', // Specify the header id
    headers: []
}

EnhancedTableHead.propTypes = 
{
    headers: PropTypes.array,
    selectable: PropTypes.bool,
    numSelected: PropTypes.number,
    onRequestSort: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.oneOf(['asc', 'desc']),
    orderBy: PropTypes.string,
    rowCount: PropTypes.number
}
