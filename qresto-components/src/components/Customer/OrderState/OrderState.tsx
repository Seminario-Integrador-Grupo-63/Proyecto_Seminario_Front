import styles from './OrderState.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { State } from './State';
import { StateLine } from './StateLine';

export const OrderState = (props: any) => {
    return (<>
        <div className={styles.container}>
            <State 
                text={'Armando orden'} 
                number={1}
                circleHighlighted={true}
                textHighlighted={false}/>

            <State 
                text={'Orden en espera'}
                number={2}
                circleHighlighted={true}
                textHighlighted={true}/>
            
            <State 
                text={'Orden en preparación'}
                number={3}/>

            <State 
                text={'Orden entregada'}
                number={4}/>

            <div className={styles.linesContainer}>
                <StateLine highlighted={true}/>
                <StateLine/>
                <StateLine/>
            </div>
            
        </div>
    </>);
}

OrderState.defaultProps =
{

}

OrderState.propTypes = 
{

}


