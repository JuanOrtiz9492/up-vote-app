import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { constants } from '../../config/constants';
import { cssConstants } from '../../config/cssConstants';
import { Link } from "react-router-dom";


const StyledHeaderContainer = styled.header`
    width: ${constants.hero.background.width};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const StyledNavBar = styled.nav`
    display: inline-flex;
    flex-direction: row;
    width: max-content;
    margin-right: 4em;
    line-height: 2em;
`
const StyledTitle = styled.h1`
    margin-left: 4em;
    width: max-content;
    display: inline;
    color: ${cssConstants.colors.white.hex}
`
const StyledLink = styled(Link)`
    text-decoration:none;
    margin: 1em;
    color: ${cssConstants.colors.white.hex}
`
const NavBar = ({title, linkArray}) => (
    <StyledHeaderContainer>
        <StyledTitle>
            {title}
        </StyledTitle>
        <StyledNavBar>
            {linkArray.map( item => (
                <StyledLink 
                    key={item.id} 
                    to={item.route}
                >
                    {item.children}
                </StyledLink>
            ))}
        </StyledNavBar>
    </StyledHeaderContainer>
)

NavBar.propTypes = {
    title: PropTypes.string,
    linkArray: PropTypes.array,
};

NavBar.defaultProps = {
    title: '',
    linkArray: [],
}

export default NavBar;