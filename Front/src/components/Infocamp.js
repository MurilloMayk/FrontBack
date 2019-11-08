import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Infocamp = () => {
  return (
    <div className="container align-self-center d-flex justify-content-center">
    <MDBCard className="my-30 px-30 pb-30">
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="20">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src='/img/card1.jpg' alt=""/>
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="20">
            <h5 className="font-weight-bold mb-3 p-0">
              <strong>CAMPEONATO MINEIRO FMJJE 2019 - EDICAO</strong>
            </h5>
            <div class="media-body">
              <h6 class="mt-0">28 de Setembro de 2019 até 29 de Setembro de 2019</h6>
            </div>
            <div class="media-body">
              <h6 class="mt-0">BELO HORIZONTE - MG</h6>
              <h9 class="mt-0">GAMELEIRA - CEP: 30510-000 | AV. AMAZONAS Nº 6825</h9>
              <h9 class="mt-0">COLÉGIO SALESIANO</h9>
            </div>
            <a href="./Campeonatos"><MDBBtn color="success" size="md" className="waves-light ">
              Registrar
            </MDBBtn></a>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}

export default Infocamp;