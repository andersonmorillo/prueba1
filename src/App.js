import logo from './logo.svg';
import './App.css';
import { CartaProyecto1Collection, NavBar } from './ui-components';
import { Link, Flex, withAuthenticator } from '@aws-amplify/ui-react';
import {Root,Postulaciones,Aceptarproyectos} from "./pages/index";
import {
  BrowserRouter as Router,
  Link as ReactRouterLink,
  Routes,
  Route,
 
 } from 'react-router-dom';

function App({user}) {
  return (
  <Router>
      <Routes>
        <Route path="/proyectos" element={<Aceptarproyectos />} />
        <Route path="/postulaciones" element={<Postulaciones />} />
        <Route path="/" element={<Root/>} />
      </Routes>
  </Router>
  );
}

export default withAuthenticator(App);
