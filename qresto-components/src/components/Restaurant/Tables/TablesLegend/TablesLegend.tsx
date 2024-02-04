import styles from './TablesLegend.module.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Box} from '@mui/material'

export const TablesLegend = (props: any) => {
    return (<>
        <Box 
            sx={{
                display: 'flex', 
                flexDirection: 'row',
                width: 'fit-content'
            }}>
            <div className={`${styles.circle} ${styles.free}`}></div>
            <span className={styles.text}>Libre</span>
            <div className={`${styles.circle} ${styles.occupied}`}></div>
            <span className={styles.text}>Ocupada</span>
            <div className={`${styles.circle} ${styles.waiting}`}></div>
            <span className={styles.text}>En espera</span>
            <div className={`${styles.circle} ${styles.paymentReady}`}></div>
            <span className={styles.text}>Cuenta pedida</span>
        </Box>
    </>);
}

TablesLegend.defaultProps =
{


}

TablesLegend.propTypes =
{

}


