import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { BillRow } from "./BillRow";
import {theme} from "@/Common/Theme/themes";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const BillEach = (props: any) => {
    const createBillRow = (row, index) => {
        return(<BillRow key={'billrow' + index} row={row} />)
    }

    return (
        <>
            {props.billData.map((row, index) => createBillRow(row, index))}
        </>
    )
}

BillEach.defaultProps = {
    billData: []
}

BillEach.propTypes = {
    billData: PropTypes.array
}
