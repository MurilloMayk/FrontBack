import React, { Component } from 'react';
import HomeCard from './HomeCard';

const data = [
    {
        title:'P0987-PRIME EXPERIENCE JIU JITSU 2019 - EDICAO', 
        image: 'card3.jpg',
        text:'Data do Evento: 07/09/2019',     
    },
    {
        title:'P0987-PRIME EXPERIENCE JIU JITSU 2019 - EDICAO', 
        image: 'card2.jpg',
        text:'Data do Evento: 07/09/2019',     
    },
    {
        title:'P0987-PRIME EXPERIENCE JIU JITSU 2019 - EDICAO', 
        image: 'card1.jpg',
        text:'Data do Evento: 07/09/2019',     
    }
];



export class Home extends Component {
    render() {
        return (
            <div>
                <div id="wrapper-carousel">
                    <div className="container">
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={process.env.PUBLIC_URL + '/img/slide1.png'} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/img/slide2.png'} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={process.env.PUBLIC_URL + '/img/slide3.png'} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="wrapper-card">
                    <div className="container">
                        <div>
                            <div className="conteudo">
                                <h2 className="titulo-pg-ini">Competições em Destaque</h2>
                            </div>
                            <div className="row">
                            {data.map( card => <HomeCard image={card.image} title={card.title} text={card.text}  /> )}
                            </div>
                           
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Home;