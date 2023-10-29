import styles from './OrderState.module.scss';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { State } from './State';
import { StateLine } from './StateLine';

export const OrderState = (props: any) => {
    const [processingCircleHighlight, setProcessingCircleHighlight] = useState(false)
    const [processingTextHighlight, setProcessingTextHighlight] = useState(false)
    const [waitingCircleHighlight, setWaitingCircleHighlight] = useState(false)
    const [waitingTextHighlight, setWaitingTextHighlight] = useState(false)
    const [preparationCircleHighlight, setPreparationCircleHighlight] = useState(false)
    const [preparationTextHighlight, setPreparationTextHighlight] = useState(false)
    const [deliveredCircleHighlight, setDeliveredCircleHighlight] = useState(false)
    const [deliveredTextHighlight, setDeliveredTextHighlight] = useState(false)

    const setState = () => {
        if(props.state === 'processing'){
            setProcessingCircleHighlight(true)
            setProcessingTextHighlight(true)
            setWaitingCircleHighlight(false)
            setWaitingTextHighlight(false)
            setPreparationCircleHighlight(false)
            setPreparationTextHighlight(false)
            setDeliveredCircleHighlight(false)
            setDeliveredTextHighlight(false)

        } else if(props.state === 'waiting'){
            setProcessingCircleHighlight(true)
            setProcessingTextHighlight(false)
            setWaitingCircleHighlight(true)
            setWaitingTextHighlight(true)
            setPreparationCircleHighlight(false)
            setPreparationTextHighlight(false)
            setDeliveredCircleHighlight(false)
            setDeliveredTextHighlight(false)

        } else if(props.state === 'preparation'){
            setProcessingCircleHighlight(true)
            setProcessingTextHighlight(false)
            setWaitingCircleHighlight(true)
            setWaitingTextHighlight(false)
            setPreparationCircleHighlight(true)
            setPreparationTextHighlight(true)
            setDeliveredCircleHighlight(false)
            setDeliveredTextHighlight(false)

        } else if (props.state === 'delivered'){
            setProcessingCircleHighlight(true)
            setProcessingTextHighlight(false)
            setWaitingCircleHighlight(true)
            setWaitingTextHighlight(false)
            setPreparationCircleHighlight(true)
            setPreparationTextHighlight(false)
            setDeliveredCircleHighlight(true)
            setDeliveredTextHighlight(true)
        }
    }

    useEffect(() => {
        setState()
    }, [props.state])

    return (<>
        <div className={styles.container}>
            <State 
                text={'Armando orden'} 
                number={1}
                circleHighlighted={processingCircleHighlight}
                textHighlighted={processingTextHighlight}/>

            <State 
                text={'Orden en espera'}
                number={2}
                circleHighlighted={waitingCircleHighlight}
                textHighlighted={waitingTextHighlight}/>
            
            <State 
                text={'Orden en preparación'}
                circleHighlighted={preparationCircleHighlight}
                textHighlighted={preparationTextHighlight}
                number={3}/>

            <State 
                text={'Orden entregada'}
                circleHighlighted={deliveredCircleHighlight}
                textHighlighted={deliveredTextHighlight}
                number={4}/>

            <div className={styles.linesContainer}>
                <StateLine highlighted={waitingCircleHighlight}/>
                <StateLine highlighted={preparationCircleHighlight}/>
                <StateLine highlighted={deliveredCircleHighlight}/>
            </div>
        </div>
    </>);
}

OrderState.defaultProps =
{
    state: 'processing'
}

OrderState.propTypes = 
{
    state: PropTypes.oneOf([
        'processing',
        'waiting',
        'preparation',
        'delivered',
    ])
}


