import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BannerContainer = styled.div`
    background: ${props=> props.background};
    display: grid;
    grid-template-columns: ${props => props.template};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: 100%;
    position: relative;
    box-sizing: border-box;
`

const Banner = ({
    background,
    template,
    margin,
    padding,
    children,
    }) => (
        <BannerContainer
            background = {background}
            template = {template}
            margin = {margin}
            padding = {padding}
        >
            {children}
        </BannerContainer>
    );

Banner.propTypes = {
    background: PropTypes.string,
    template: PropTypes.string,
    margin: PropTypes.string,
    children: PropTypes.element,
    padding: PropTypes.element,
};
    
Banner.defaultProps = {
    background: '#ffffff',
    template: '100%',
    margin: '0',
    children: null,
    margin: '0'
}

export default Banner;