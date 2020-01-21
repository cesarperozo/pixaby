import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: ""
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("auto", "start");
  };

  paginaAnterior = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    // leer si la pagina es 1 ya no ir atras
    if (pagina === 1) return null;

    //resta una a la pagina actual
    pagina -= 1;

    //agregar el cambio al state
    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    //console.log(pagina);
    //console.log("anterior...");
  };

  paginaSiguiente = () => {
    //leer el state de la pagina actual
    let pagina = this.state.pagina;

    //sumar una a la pagina actual
    pagina += 1;

    //agregar el cambio al state
    this.setState(
      {
        pagina
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    //console.log(pagina);
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=14512014-a2a67838f1fd8933f8b6c964e&q=${termino}&per_page=30&page=${pagina}`;

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino,
        pagina: 1
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="Titulo-image">Search Image</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
