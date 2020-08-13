import React from 'react';
import './styles.css';

function Spoiler(){
    return(
        <section className="spoiler-content">
            <div className="alert-img">
                <img src="https://image.flaticon.com/icons/svg/497/497738.svg" alt="ALERTA"/>
            </div>
            <div className="description">
                <h1>Spoiler alert!</h1>
                <p>As funcionalidades serão liberadas ao longo dos próximos<br/> meses. Embarque porque o foguete está decolando.</p>
                <p>Novidades a caminho</p>
            </div>
        </section>
    )
}
export default Spoiler