import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';
import Layout from './pages/layout/layout.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user =>  {
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Layout currentUser={this.state.currentUser}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path='/signin' element={<SignInPage/>} />
          </Routes>
          </Layout>
      </BrowserRouter>
    )
  }
}

export default App;