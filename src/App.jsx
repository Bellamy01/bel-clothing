import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import './App.css';
import Layout from './pages/layout/layout.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import SignUpPage from './pages/sign-up/sign-up-page.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';
import CollectionsOverview from './components/collections-overview/collections-overview.component';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>  {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.forEach(doc => {
          setCurrentUser({
            id: doc.id,
            ...doc.data()
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <BrowserRouter>
        <ToastContainer/>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="shop" element={<ShopPage/>}>
              <Route index element={<CollectionsOverview/>} />
              <Route path=':cId' element={<CollectionPage />} />
            </Route>
            <Route
              exact path="/signin"
              element={ currentUser ? <Navigate to="/" /> : <SignInPage />}
            />
            <Route 
              exact path='/signup' 
              element={ currentUser ? <Navigate to="/" /> : <SignUpPage />} 
            />
            <Route exact path='/checkout' element={<CheckoutPage/>} />
          </Routes>
          </Layout>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);