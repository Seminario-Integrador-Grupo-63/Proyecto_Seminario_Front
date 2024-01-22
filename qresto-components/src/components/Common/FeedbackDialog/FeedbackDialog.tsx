import styles from './FeedbackDialog.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material'
import { BasicFormDialog } from '../BasicFormDialog';
import { PositiveFeedbackLogo } from './PositiveFeedbackLogo';
import { NegativeFeedbackLogo } from './NegativeFeedbackLogo';

export const FeedbackDialog = (props: any) => {
    const [text, setText] = useState('')
    useEffect(() => {
        setText(props.text)
    }, [props.text])

    const setButtonColor = () => {
        if(props.positive){
            return 'success'
        } else {
            return 'error'
        }
    }

    return (<>
        <BasicFormDialog
            open={props.open}
            onClose={props.onClose}
            maxWidth='xs'>
            {props.positive?
                <div className={`${styles.logoSection} ${styles.positive}`}>
                    <div className={styles.logo}>
                        <PositiveFeedbackLogo color="white"/>
                    </div>
                </div>
            :
                <div className={`${styles.logoSection} ${styles.negative}`}>
                    <div className={styles.logo}>
                        <NegativeFeedbackLogo color="white"/>
                    </div>
                </div>
            }

            <div className={styles.textSection}>
                <h2 className={styles.text}>{ text }</h2>
                <Button 
                    variant="contained"
                    color={setButtonColor()}
                    onClick={props.onOk}>
                    Aceptar
                </Button>
            </div>
        </BasicFormDialog>
    </>);
}

FeedbackDialog.defaultProps =
{
    open: false,
    onClose: function(){},
    positive: true,
    onOk: function(){},
    text: 'La operación ha sido realizada exitosamente'

}

FeedbackDialog.propTypes =
{
    open: PropTypes.bool,
    onClose: PropTypes.func,
    onOk: PropTypes.func,
    positive: PropTypes.bool,
    text: PropTypes.string
}


