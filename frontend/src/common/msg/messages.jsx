import React from "react";
import ReduxToastr from "react-redux-toastr";
import "modules/react-redux-toastr/lib/css/react-redux-toastr.css";

export default props => (
  <ReduxToastr
    timeOut={4000} // tempo de exibir
    newestOnTop={false} //no topo
    preventDuplicates={true} ///previnir alert duplicados
    position="top-right" // mostrar no topo
    transitionIn="fadeIn" //transição de entrada
    transitionOut="fadeOut" //transição de saida
    progressBar //tempo para ser escondido
  />
);
