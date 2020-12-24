import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {contact, formikContact, home, spain} from "conf/routes";

const MainMenu = ({onClickChangeThemeButton}) => (
  <nav>
    <ul>
      <li>
        <Link to={home()}>Home</Link>
      </li>
      <li>
        <Link to={spain()}>España</Link>
      </li>
      <li>
        <Link to={contact()}>Contacto</Link>
      </li>
      <li>
        <Link to={formikContact()}>Contacto con Formik</Link>
      </li>
      <li>
        <button onClick={onClickChangeThemeButton}>Cambiar Tema</button>
      </li>
    </ul>
  </nav>
);

MainMenu.propTypes = {
  onClickChangeThemeButton: PropTypes.func.isRequired
};

export default MainMenu;
