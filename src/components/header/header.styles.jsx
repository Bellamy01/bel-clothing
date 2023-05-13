import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

const OptionsContainerStyles = css`
    padding: 15px 15px 10px;
    font-size: 20px;
    cursor: pointer;   
`

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: -40px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 30px 10px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    margin: 20px 0px;
    align-items: center;
    justify-content: flex-end;
`;


export const OptionsLink = styled(Link)`
    ${OptionsContainerStyles}
`
