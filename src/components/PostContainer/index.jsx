import React from 'react';
import './styles.css'

function PostContainer(){
    return(
        <section className="post-container">
            <div className="post-img">
                <img src="https://rocketseat.com.br/static/979dbe5c51b7e0276807cd35fab20e00/419d5/community.webp" alt="Demonstração da postagem"/>
            </div>
            <div className="description">
                <div className="green-detail"></div>
                <h1>Devs melhores,<br/> aplicações melhores,<br/> um mundo melhor</h1>
                <p>Uma experiência com propósito para impulsionar sua<br/> carreira e transformar o mundo.</p>
            </div>
        </section>
    )
}
export default PostContainer