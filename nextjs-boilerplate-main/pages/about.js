import React from "react";
import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>About us</h2>
            <p className={styles.description}>
            Voittoa tavoittelematon järjestö, joka yrittää yhdistää eri kulttuureja ympäri maailmaa A non.
            </p>
        </div>
    )
}