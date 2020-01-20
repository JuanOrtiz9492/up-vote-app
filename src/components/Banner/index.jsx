import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerContainer = styled.div`
    background: ${props=> props.background};
    display: grid;
    grid-template-columns: ${props => props.template};
    margin: ${props => props.margin};
    width: 100%;
    position: relative;
`

const Banner = ({
    background,
    template,
    margin,
    children,
    }) => (
        <BannerContainer
            background = {background}
            template = {template}
            margin = {margin}
        >
            {children}
        </BannerContainer>
    );

Banner.propTypes = {
    background: PropTypes.string,
    template: PropTypes.string,
    margin: PropTypes.string,
    children: PropTypes.element,
};
    
Banner.defaultProps = {
    background: '#ffffff',
    template: '100%',
    margin: '0',
    children: null
}

export default Banner;