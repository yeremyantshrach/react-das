import React from 'react';
import { Spinner } from 'reactstrap';

import styles from './Loader.module.css';

const Loader = (props) => (
    <div className={styles.loader}>
        <Spinner
            color="primary"
            style={{ width: '3rem', height: '3rem' }}
            type="grow"
        />
    </div>
)

export default Loader;