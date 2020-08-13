import React from 'react';
import './styles.css'

function RewardContainer(){
    return(
        <section className="reward-container">
            <div className="description">
                <div className="green-detail"></div>
                <h1>Conquiste novas<br/> habilidades e seja<br/> reconhecido</h1>
                <p>Uma jornada de aprendizado contínuo, desafios e<br/> recompensas que vão te levar para o próximo nível.</p>
            </div>
            <div className="reward-img">
                <img src="https://rocketseat.com.br/static/173908ae179035bc77642255cbf0d2c2/419d5/gamification.webp" alt="Imagens das recompensas"/>
            </div>
        </section>
    )
}

export default RewardContainer