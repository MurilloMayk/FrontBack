import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Cadastro = () => {
  return (
      <MDBRow>
        <MDBCol md="12">
        <div className="container align-self-center d-flex justify-content-center">
          <form>
            <p className="h4 text-center mb-4">Registre-se</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Digite seu nome
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Digite seu e-mail
            </label>
            <input
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirme seu e-mail
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Digite sua senha
            </label>
            <input
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <br></br>
           <a href="#"><MDBBtn color="primary" size="md" className="waves-light ">
              Registrar
            </MDBBtn></a>
          </form>
          </div>
        </MDBCol>
      </MDBRow>
  );
};

export default Cadastro;