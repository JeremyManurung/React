import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Contact_Us from "./pages/Contact_Us";
import News from "./pages/News";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";



function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Contact_Us" component={Contact_Us} />
      <Route path="/News" component={News} />
      </Switch>
    </Router>
  
    </PersistGate>
    </Provider>
  );
}

export default App;
