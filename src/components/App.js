import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AddImage from '../containers/AddImage/AddImage';
import ImageList from './ImageList/ImageList'
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0px auto;
  max-width: 900px;
  text-align: center;
`

const Menu = styled.ul`
  list-style: none;
  padding: 0px;
`
const MenuItem = styled.li`
  display: inline-block;
  padding: 15px;  
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <nav>
          <Menu>
            <MenuItem>
              <Link to="/">Главная</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/history">История</Link>
            </MenuItem>
          </Menu>
        </nav>
        <Switch>
          <Route path="/history">
            <ImageList />
          </Route>
          <Route path="/">
            <AddImage />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}