import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  
  return (
    <BrowserRouter>
      <Route path="/login" component={LoginScreen}></Route>
      <Route path="/register" component={RegisterScreen}></Route>
      <Route path="/" exact={true} component={HomeScreen}></Route>
    </BrowserRouter>
  );
}

export default App;
