import '../App.css';

import {
  NavBar, CartaProyecto1Collection
 } from '../ui-components';
 

 export default function Root() {
  return (
    <div className="App">
      <NavBar width={"99vw"}/>
      <CartaProyecto1Collection  width={'99vw'}/>
    </div>
  );
}
