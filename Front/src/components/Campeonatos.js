import React, { Component } from 'react';

export class Campeonatos extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="list-group ">
                                <a href="#" className="list-group-item list-group-item-action active">Publicação</a>
                                <a href="#" className="list-group-item list-group-item-action">Usuarios</a>
                                <a href="#" className="list-group-item list-group-item-action">Campeonatos</a>
                                <a href="#" className="list-group-item list-group-item-action">federações</a>
                                <a href="#" className="list-group-item list-group-item-action">chaves</a>
                                <a href="#" className="list-group-item list-group-item-action">Classificações</a>
                                <a href="#" className="list-group-item list-group-item-action">Pagamento</a>
                                <a href="#" className="list-group-item list-group-item-action">Configurações</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h4>CADASTRAR CAMPEONATO</h4>
                                                    <hr />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <form>
                                                        <div className="form-group row">
                                                            <label htmlFor="Nome" className="col-4 col-form-label">Nome*</label>
                                                            <div className="col-8">
                                                                <input id="Nome" name="Nome" placeholder="Nome" className="form-control here" required="required" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="text" className="col-4 col-form-label">Cidade*</label>
                                                            <div className="col-8">
                                                                <input id="text" name="text" placeholder="Nome Cidade" className="form-control here" required="required" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="Estado" className="col-4 col-form-label">Estado*</label>
                                                            <div className="col-8">
                                                                <input id="Estado" name="Estado" placeholder="Estado" className="form-control here" required="required" type="text" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="select" className="col-4 col-form-label">Selecionar Esporte</label>
                                                            <div className="col-8">
                                                                <select id="select" name="select" className="custom-select">
                                                                    <option value="admin">Futebol</option>
                                                                    <option value="admin">Box</option>
                                                                    <option value="admin">Ciclismo</option>
                                                                    <option value="admin">Judo</option>
                                                                    <option value="admin">Karate</option>
                                                                    <option value="admin">Volei</option>
                                                                    <option value="admin">Atletismo</option>
                                                                    <option value="admin">MMA</option>
                                                                    <option value="admin">Jiu-Jitsu</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="publicinfo" className="col-4 col-form-label">Informações do Campeonato</label>
                                                            <div className="col-8">
                                                                <textarea id="publicinfo" name="publicinfo" cols={40} rows={4} className="form-control" defaultValue={""} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <label htmlFor="newpass" className="col-4 col-form-label">Anexar Banner</label>
                                                            <div className="form-group">
                                                                <label className="col-md-2 control-label" htmlFor="Cadastrar" />
                                                                <div className="col-md-8">
                                                                    <button id="file" name="file" className="btn btn-success" type="Submit">Anexo</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row">
                                                            <div className="offset-4 col-8">
                                                                <button name="submit" type="submit" className="btn btn-primary">Salvar</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Campeonatos;