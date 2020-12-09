import React, {useState, lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from "styled-components";
import MainMenu from "components/UI/MainMenu";
import {home, spain} from "conf/routes";
import ThemeContext from "./contexts/ThemeContext";
import {darkTheme, lightTheme} from "./styles/theme";
import './App.css';

const Home = lazy (() => import("components/screens/Home"));
const Spain = lazy (() => import("components/screens/Spain"));

const MainContainer = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  padding: 10px
`;

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleChangeTheme = () => {
    /* setIsDarkTheme(!isDarkTheme); */
    setIsDarkTheme(oldValue => !oldValue);
  }

  const currentTheme = isDarkTheme ? darkTheme : lightTheme;

  return(
    <ThemeContext.Provider value={currentTheme}>
      <MainContainer theme={currentTheme}>
        <Router>
          <Suspense fallback={<div>Cargando...</div>}>
          <div>
            <MainMenu onClickChangeThemeButton={handleChangeTheme} />
            <Switch>
              <Route path={spain()}>
                <Spain />
              </Route>
              <Route path={home()}>
                <Home />
              </Route>
            </Switch>
          </div>
          </Suspense>
        </Router>
      </MainContainer>
    </ThemeContext.Provider>
  );
};
