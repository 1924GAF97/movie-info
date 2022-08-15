import React from 'react';
import { ImSpinner8 } from 'react-icons/im';
import Styles from "./Spinner.module.css"

function spinner() {
    return (
        <div className={Styles.spinner}>
           <ImSpinner8  className={Styles.spinning} size={60}/>
        </div>
    );
}

export default spinner;