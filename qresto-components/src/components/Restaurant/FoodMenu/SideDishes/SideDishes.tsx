// import styles from './SideDishes.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { } from '@mui/material'
import { DataTable } from '@/Common/DataTable';

export const SideDishes = (props: any) => {
    // const [sideDishesRows, setSideDishesRows] = useState([])
    const headers = [
        {label: 'Nombre', key: 'name'},
        {label: 'Descripcion', key: 'description'}
    ]

    // useEffect(() => {

    // }, [props.sideDishes])

    return (<>
        <DataTable
            headers={headers}
            rows={props.sideDishes}/>
    </>)
}

SideDishes.defaultProps =
{
    sideDishes: []
}

SideDishes.propTypes =
{
    sideDishes: PropTypes.array
}


