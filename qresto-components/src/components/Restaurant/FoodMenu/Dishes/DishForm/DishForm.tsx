import styles from './DishForm.module.scss';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {} from '@mui/material';
import { FormDialog } from '@/Common/FormDialog';
import { DishFormContent } from './DishFormContent';

export const DishForm = (props: any) => {
    const onSubmit = () => {
        if (verifyFields) {
            // Realiza acciones al enviar el formulario
        }
    }

    const contentRef = useRef(null);

    const verifyFields = () => {
        // Realiza validaciones si es necesario
        contentRef.current.verifyFields();
    }

    return (
        <>
            <FormDialog
                open={props.open}
                onSubmit={onSubmit}
                onClose={props.onClose}
                title={props.isNew ? 'Agregar Plato' : 'Editar Plato'}>
                <DishFormContent
                 ref={contentRef}
                 categories={props.categories}
                 sideDishes={props.sideDishes}
                 dish={props.dish}
                 isNew={props.isNew}
                />
            </FormDialog>
        </>
    );
}

DishForm.defaultProps = {
    dish: null,
    isNew: true,
    categories: [],
    sideDishes: [],
    open: false,
    onSubmit: function () { },
    onClose: function () { },
    title: 'Title'
}

DishForm.propTypes = {
    dish: PropTypes.object,
    isNew: PropTypes.bool,
    categories: PropTypes.array,
    sideDishes: PropTypes.array,
    open: PropTypes.bool,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    title: PropTypes.string,
};
