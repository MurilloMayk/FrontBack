import React, { Component } from 'react';

export class Futebol extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Apagar Campeonato</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Deseja mesmo apagar Campeonato?
              </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Não</button>
                                <button type="button" className="btn btn-primary">Sim</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Horário</th>
                                <th scope="col">Modalidade</th>
                                <th scope="col">Data</th>
                                <th scope="col">Local</th>
                                <th scope="col">Operações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">17:00</th>
                                <td>Campo</td>
                                <td>07/09/2019</td>
                                <td>UniEvangélica</td>
                                <td>
                                    <a href="./Campeonatos">
                                        <i className="fas fa-edit" />
                                    </a>
                                    <a href="#">
                                        <i className="fas fa-trash-alt" data-toggle="modal" data-target="#exampleModalCenter" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">17:00</th>
                                <td>Campo</td>
                                <td>07/09/2019</td>
                                <td>UniEvangélica</td>
                                <td>
                                    <a href="./Campeonatos">
                                        <i className="fas fa-edit" />
                                    </a>
                                    <a href="#">
                                        <i className="fas fa-trash-alt" data-toggle="modal" data-target="#exampleModalCenter" />
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">17:00</th>
                                <td>Campo</td>
                                <td>07/09/2019</td>
                                <td>UniEvangélica</td>
                                <td>
                                    <a href="./Campeonatos">
                                        <i className="fas fa-edit" />
                                    </a>
                                    <a href="#">
                                        <i className="fas fa-trash-alt" data-toggle="modal" data-target="#exampleModalCenter" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};

export default Futebol;