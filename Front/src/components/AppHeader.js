import React from "react";
import {Link} from 'react-router-dom';

 /* Costante que cria o Menu */
const links = [
    { route: "/", label: "Home"},
    
];
/*Função que cria os Links do Menu*/
function renderLink() {
    return links.map( link =>
        
        <Link key={link.route} className="nav-link" to={link.route}>
            {link.label}
        </Link>
    )
}

/*Função onde está todo Menu salvo*/
function AppHeader (){

    return(


        <div id="wrapper-header">
        <div className="container">
          <div className="row align-items-center">

            <div className="col col-lg-2">
              <a id="logo" href="#">
                <img src={process.env.PUBLIC_URL + "/img/cl_logo.png"} alt="Logomrca" />
              </a>
            </div>

            <div className="col-lg-8">

              <div className="row">

                <div className="col">
                  <form id="search-form">
                    <div className="input-group">
                      <input type="text" className="form-control" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2"><i className="fas fa-search"></i></span>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul className="nav">
                    {renderLink()}
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Campeonatos </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="./Futebol">Futebol</a>
                        <a class="dropdown-item" href="#">Judo</a>
                        <a class="dropdown-item" href="#">Jiu-Jitsu</a>
                        <a class="dropdown-item" href="#">Atletismo</a>
                        <a class="dropdown-item" href="#">Ciclismo</a>
                        <a class="dropdown-item" href="#">MMA</a>
                        <a class="dropdown-item" href="#">Box</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Federações
                                        </a>
                      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Pará</a>
                        <a class="dropdown-item" href="#">Brasilia</a>
                        <a class="dropdown-item" href="#">Goias</a>
                        <a class="dropdown-item" href="#">São Paulo</a>
                      </div>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./Ajuda">Ajuda</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            

            <div id="header-actions" className="col col-lg-2">

              <div className="row">

                <div className="col">
                  <a id="cart" href="#">
                    <img src={process.env.PUBLIC_URL + '/img/cart.png'} alt="Carrinho de compras" />
                  </a>
                </div>

                <div className="col">
                  <a id="user" href="./Login">
                    <img src={process.env.PUBLIC_URL + '/img/male-user.png'} alt="Usuário" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

        
    ) 
}

export default AppHeader;