import React from "react";
import {MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const Login = () => {
  return (
      <MDBRow>
        <MDBCol md="12">
        <div className="container align-self-center d-flex justify-content-center">
          <form>
            <p className="h5 text-center mb-4">Faça seu Login</p>
            <div className="grey-text">
              <MDBInput
                label="Digite seu E-mail"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Digite sua senha"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <a href="#"><MDBBtn color="primary" size="md" className="waves-light ">
              Login
            </MDBBtn></a>
            <a href="./Cadastro"><MDBBtn color="primary" size="md" className="waves-light ">
              Registrar
            </MDBBtn></a>
          </form>
          </div>
        </MDBCol>
      </MDBRow>
    
  );
};

export default Login;