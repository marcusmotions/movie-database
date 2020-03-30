import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/movies.scss";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import mySagas from "./redux/sagas";
import { movieReducer } from "./redux/reducers";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Favorites from "./components/Favorites";
import DetailFavorites from "./components/DetailFavorites";

const App: React.FC = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(movieReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(mySagas);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path={"/"}>
              <Main />
            </Route>
            <Route exact path={"/detail/:imdbID"}>
              <Detail />
            </Route>
            <Route exact path={"/detail/favorites/:imdbID"}>
              <DetailFavorites />
            </Route>
            <Route exact path={"/favorites"}>
              <Favorites />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
