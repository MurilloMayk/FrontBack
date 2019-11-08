import React, { Component } from 'react';

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
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card1.jpg'} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P1038-COPA PRIME DE JIU-JITSU 7 - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 13/09/2019 até 15/09/2019</p>
                                            <a href="/Infocamp" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card2.jpg'} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P0946-PAN AMERICANO JIU-JITSU 1º - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 08/09/2019</p>
                                            <a href="#" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card3.jpg'} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P0987-PRIME EXPERIENCE JIU JITSU 2019 - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 07/09/2019</p>
                                            <a href="#" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card1.jpg'} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P1038-COPA PRIME DE JIU-JITSU 7 - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 13/09/2019 até 15/09/2019</p>
                                            <a href="#" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card2.jpg'} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P0946-PAN AMERICANO JIU-JITSU 1º - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 08/09/2019</p>
                                            <a href="#" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card" >
                                        <img src={process.env.PUBLIC_URL + '/img/card3.jpg'} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">P0987-PRIME EXPERIENCE JIU JITSU 2019 - EDICAO </h5>
                                            <p className="card-text">Data do Evento: 07/09/2019</p>
                                            <a href="#" className="btn btn-primary">Veja mais...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
};

export default Home;