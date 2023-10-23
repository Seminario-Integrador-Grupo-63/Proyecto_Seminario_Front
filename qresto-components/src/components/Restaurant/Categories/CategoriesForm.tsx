// import styles from './CategoriesForm.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import {} from '@mui/material'
import { FormDialog } from '@/Common/FunctionalTemplates/FormDialog';
import { ImageSelector } from '@/Restaurant/ImageSelector/ImageSelector';
import { useState } from 'react';

export const CategoriesForm = (props: any) => {
    return (<>
        <FormDialog 
            title={props.isNew ? "Nueva categoría" : "Editar categoría"}
            open={props.open}
            onClose={props.onClose}
            onSubmit={props.onSubmit}
            maxWidth='sm'/>
    </>);
}

CategoriesForm.defaultProps =
{
    isNew: true,
    open: false,
    onSubmit: function(){},
    onClose: function(){},
}

CategoriesForm.propTypes = 
{
    isNew: PropTypes.bool,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
}