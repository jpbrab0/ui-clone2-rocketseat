import React from 'react';
import './styles.css'
import JourneyEvent from '../JourneyEvent';

function JourneyContainer(){
    return(
        <section className="journey-container">
            <div className="title">
                <h1>Jornada de<br/> evolução contínua</h1>
                <p>Conheça as órbitas de aprendizado que vão<br/> impulsionar cada etapa da sua carreira.</p>
            </div>
            <div className="events">
                <JourneyEvent category="iniciante" count="1" title="Starter" subtitle="Sua jornada começa aqui." description="Um curso completo de desenvolvimento web do zero"/>
                <JourneyEvent category="intermediário"count="2"  title="Next Level Week" subtitle="Avance para o próximo nível." description="Um evento incrível para toda a comunidade evoluir junto."/>
                <JourneyEvent category="intermediário" count="3" title="Bootcamps" subtitle="Acelere sua carreira." description="Treinamentos intensivos para ficar alinhado com o mercado."/>
                <JourneyEvent category="avançado" count="4"  title="ExpertsClub" subtitle="Sua evolução não pode parar." description="Aulas direto ao ponto em assuntos específicos."/>
            </div>
        </section>
    )
}
export default JourneyContainer
