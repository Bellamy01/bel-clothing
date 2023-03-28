import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';
import Layout from './pages/layout/layout.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignUpPage from './pages/sign-up/sign-up-page.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>  {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.forEach(doc => {
          this.setState({
            currentUser: {
              id: doc.id,
              ...doc.data()
          }});
        });
      } else {
        this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <ToastContainer/>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path='/signin' element={<SignInPage/>} />
            <Route path='/signup' element={<SignUpPage />} />
          </Routes>
          </Layout>
      </BrowserRouter>
    )
  }
}

export default App;