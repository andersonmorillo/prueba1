import '../App.css';

import {
  NavBar, CartaProyectoCoor1Collection
 } from '../ui-components';
 

 export default function Root() {
  return (
    <div className="App">
      <NavBar width={"99vw"}/>
      <CartaProyectoCoor1Collection  />
    </div>
  );
}