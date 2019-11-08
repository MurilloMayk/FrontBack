import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        return (
            <div>
                <div id="wrapper-footer">
                    <div class="container">

                        <footer class="page-footer font-small indigo">

                            <div class="container">

                                <div class="row text-center d-flex justify-content-center pt-5 mb-3">

                                    <div class="col-md-2 mb-3">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="./">Home</a>
                                        </h6>
                                    </div>

                                    <div class="col-md-2 mb-3">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="./Infocamp">Campeonatos</a>
                                        </h6>
                                    </div>

                                    <div class="col-md-2 mb-3">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="./Federacao">Federações</a>
                                        </h6>
                                    </div>
                                    <div class="col-md-2 mb-3">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="./Ajuda">Ajuda</a>
                                        </h6>
                                    </div>

                                    <div class="col-md-2 mb-3">
                                        <h6 class="text-uppercase font-weight-bold">
                                            <a href="./Login">Login/Registrar</a>

                                        </h6>
                                    </div>


                                </div>

                                <div class="footer-copyright text-center py-3">© 2019 Copyright
                                </div>

                            </div>
                        </footer>
                    </div>
                </div>



            </div>

        )
    }
};

export default Footer;