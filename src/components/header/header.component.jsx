import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selector';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import Logo from '../../assets/crown.svg';
import { OptionsContainer, OptionsLink, HeaderContainer, LogoContainer } from './header.styles';

const Header = ({ currentUser, hidden }) => {
    const notify = () => {
        auth.signOut();
    }
    return (
    <HeaderContainer>
        <LogoContainer to='/'>
            <img className='logo' src={Logo} />
        </LogoContainer>
        <OptionsContainer>
            <OptionsLink to='/shop'>
                SHOP
            </OptionsLink>
            <OptionsLink to='/contact'>
                CONTACT
            </OptionsLink>
            {
                currentUser ?
                <OptionsLink as='div' onClick={notify}>
                   SIGN OUT 
                </OptionsLink>
                :
                <OptionsLink to='/signin'>
                    SIGN IN
                </OptionsLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ?
            null :
            <CartDropDown/>
        }
    </HeaderContainer>
)};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);