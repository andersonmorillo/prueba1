import '../App.css';

import {
  NavBar, FormularioPostulacin
 } from '../ui-components';
 

 export default function Postulaciones() {
  return (
    <div className="App">
      <NavBar width={"99vw"}/>
      <FormularioPostulacin/>
    </div>
  );
}
