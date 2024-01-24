import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { } from '@mui/material'
import {LoadingDialog} from '@/Common/LoadingDialog'
import {FeedbackDialog} from '@/Common/FeedbackDialog/FeedbackDialog'

export const Component = (props: any) => {
    const [openFeedbackDialog, setOpenFeedbackDialog] = useState(false)
    const [positiveFeedback, setPositiveFeedback] = useState(false)
    const [textFeedback, setTextFeedback] = useState('')
    const [actionFeedback, setActionFeedback] = useState('')

    const [loading, setLoading] = useState(false)

    const triggerFeedback = (state) => {
        setPositiveFeedback(state)
        if(state){
            if(actionFeedback === 'cancel-order'){
                setTextFeedback('La order ha sido cancelada exitosamente')
            }
        } else {
            if(actionFeedback === 'cancel-order'){
                setTextFeedback('No se ha podido cancelar la orden')
            }
        }
        setOpenFeedbackDialog(true)
    }

    const closeFeedback = () => {
        setOpenFeedbackDialog(false)
    }


    return (<>
        <FeedbackDialog
            open={openFeedbackDialog}
            positive={positiveFeedback}
            text={textFeedback}
            onClose={closeFeedback}/>
        
        <LoadingDialog open={loading}/>
    </>);
}

Component.defaultProps =
{


}

Component.propTypes =
{

}


