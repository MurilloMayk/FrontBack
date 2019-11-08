import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

/*Import de todos Componentes do Site*/
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Futebol from './components/Futebol';
import Infocamp from './components/Infocamp';
import Ajuda from './components/Ajuda';
import NotFound from './components/NotFound';
import Campeonatos from './components/Campeonatos';
import Federacao from './components/Federacao';

/*Render onde chama todos componentes que está no site */
export class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Cadastro" component={Cadastro} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Futebol" component={Futebol} />
                    <Route exact path="/Infocamp" component={Infocamp} />
                    <Route exact path="/Campeonatos" component={Campeonatos} />
                    <Route exact path="/Federacao" component={Federacao} />
                    <Route exact path="/Ajuda" component={Ajuda} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
};

export default Routes;