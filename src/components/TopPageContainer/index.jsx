import React from 'react'
import './styles.css'

export default function TopPageContainer(){
    return(
        <section className="top-container">
                <div className="title-container">
                    <h1>Evolua rápido como a<br/> tecnologia.</h1>
                </div>
                <div className="description-container">
                    <p>Junte-se a milhares de devs e acelere<br/> na direção dos seus objetivos.</p>
                    <button>EMBARCAR NO FOGUETE</button>
                </div>
                <img src="https://rocketseat.com.br/static/90ef5fe1088f8ae2721331aa5004d211/26003/headline.webp" alt="Demonstração da plataforma de estudos da rocketseat"/>
        </section>
    )
}