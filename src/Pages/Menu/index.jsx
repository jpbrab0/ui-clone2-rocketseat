import React from "react";
import "./styles.css";
import ConnectionsImg from "../../assets/images/connectionsimg.webp";

import Header from "../../components/Header";
import JourneyEvent from "../../components/JourneyEvent";

export default function Menu() {
  return (
    <>
      <Header />
      <main>
        <section className="top-container">
          <div className="title-container">
            <h1>
              Evolua rápido como<br/> a tecnologia.
            </h1>
          </div>
          <div className="description-container">
            <p>
              Junte-se a milhares de devs e acelere
              <br /> na direção dos seus objetivos.
            </p>
            <button>EMBARCAR NO FOGUETE</button>
          </div>
          <div className="img-container">
            <img
              src="https://rocketseat.com.br/static/90ef5fe1088f8ae2721331aa5004d211/26003/headline.webp"
              alt="Demonstração da plataforma de estudos da rocketseat"
            />
          </div>
        </section>
        <section className="connections-container">
          <div className="connection-img">
            <img src={ConnectionsImg} alt="Demonstração de conexão" />
          </div>
          <div className="description">
            <div className="green-detail"></div>
            <h1>
              Conexão é a chave
              <br /> para as maiores
              <br /> oportunidades
            </h1>
            <p>
              Uma comunidade incrível e todo o ecossistema de
              <br />
              tecnologia na mesma plataforma.
            </p>
          </div>
        </section>
        <section className="reward-container">
          <div className="description">
            <div className="green-detail"></div>
            <h1>
              Conquiste novas
              <br /> habilidades e seja
              <br /> reconhecido
            </h1>
            <p>
              Uma jornada de aprendizado contínuo, desafios e<br /> recompensas
              que vão te levar para o próximo nível.
            </p>
          </div>
          <div className="reward-img">
            <img
              src="https://rocketseat.com.br/static/173908ae179035bc77642255cbf0d2c2/419d5/gamification.webp"
              alt="Imagens das recompensas"
            />
          </div>
        </section>
        <section className="post-container">
          <div className="post-img">
            <img
              src="https://rocketseat.com.br/static/979dbe5c51b7e0276807cd35fab20e00/419d5/community.webp"
              alt="Demonstração da postagem"
            />
          </div>
          <div className="description">
            <div className="green-detail"></div>
            <h1>
              Devs melhores,
              <br /> aplicações melhores,
              <br /> um mundo melhor
            </h1>
            <p>
              Uma experiência com propósito para impulsionar sua
              <br /> carreira e transformar o mundo.
            </p>
          </div>
        </section>
        <section className="spoiler-content">
          <div className="alert-img">
            <img
              src="https://image.flaticon.com/icons/svg/497/497738.svg"
              alt="ALERTA"
            />
          </div>
          <div className="description">
            <h1>Spoiler alert!</h1>
            <p>
              As funcionalidades serão liberadas ao longo dos próximos
              <br /> meses. Embarque porque o foguete está decolando.
            </p>
            <p>Novidades a caminho</p>
          </div>
        </section>
        <section className="journey-container">
          <div className="title">
            <h1>
              Jornada de
              <br /> evolução contínua
            </h1>
            <p>
              Conheça as órbitas de aprendizado que vão
              <br /> impulsionar cada etapa da sua carreira.
            </p>
          </div>
          <div className="events">
            <JourneyEvent
              category="iniciante"
              count="01"
              title="Starter"
              subtitle="Sua jornada começa aqui."
              description="Um curso completo de desenvolvimento web do zero"
            />
            <JourneyEvent
              category="intermediário"
              count="02"
              title="Next Level Week"
              subtitle="Avance para o próximo nível."
              description="Um evento incrível para toda a comunidade evoluir junto."
            />
            <JourneyEvent
              category="intermediário"
              count="03"
              title="Bootcamps"
              subtitle="Acelere sua carreira."
              description="Treinamentos intensivos para ficar alinhado com o mercado."
            />
            <JourneyEvent
              category="avançado"
              count="04"
              title="ExpertsClub"
              subtitle="Sua evolução não pode parar."
              description="Aulas direto ao ponto em assuntos específicos."
            />
          </div>
        </section>
      </main>
      <div className="create-account-container">
        <div className="title">
          <h1>Mais de <b>200 mil devs</b><br/> já se conectaram.</h1>
          <p>Embarque nesse foguete e começe a avançar agora<br/> mesmo na direção dos seus objetivos</p>
        </div>
        <div className="create-button">
          <button>criar minha conta</button>
        </div>
      </div>
      <footer>
        <h2>Ui-clone do site da <a target="blank" href="https://rocketseat.com.br">Rocketseat</a> feito por <a target="blank" href="https://github.com/jpbrab0">João Pedro Resende</a></h2>
        <h3>Feito apenas para estudo!</h3>
        <p>Para mais informações <a target="blank" href="https://github.com/jpbrab0/ui-clone2-rocketseat">clique aqui</a> </p>
      </footer>
    </>
  );
}
