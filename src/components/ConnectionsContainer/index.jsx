import React from 'react';
import './styles.css'
import ConnectionsImg from '../../assets/images/connectionsimg.webp'
function ConnectionsContainer(){
    return(
        <section className="connections-container">

            <div className="connection-img">
                <img src={ConnectionsImg} alt="Demonstração de conexão"/>
            </div>
            <div className="description">
                <div className="green-detail"></div>
                <h1>Conexão é a chave<br/> para as maiores<br/> oportunidades</h1>
                <p>Uma comunidade incrível e todo o ecossistema de<br/>tecnologia na mesma plataforma.</p>
            </div>
        </section>
    )
}
export default ConnectionsContainer;