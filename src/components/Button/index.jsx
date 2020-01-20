import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { cssConstants } from '../../config/cssConstants';

const { fire, jungle, white } = cssConstants.colors;

const StyledButton = styled.button`
    text-transform: Capitalize;
    font-family: Lato, Arial;
    color: ${props => props.color};
    text-decoration: none;
    background: rgba(${white.r}, ${white.g}, ${white.b}, 0.1);
    padding: 10px 20px;
    border: 2px solid ${props => props.color};
    display: inline-block;
    box-sizing: border-box;
    width: ${props => props.width ? props.width: 'max-content'};
    height: ${props => props.height ? props.height: 'auto'};
    cursor: pointer;

    &:focus {
        outline:0;
    }

    &.fire {
        border: 3px solid rgba(${fire.r}, ${fire.g}, ${fire.b}, ${props => props.alpha});
        padding: 0 0.7em;
        background: rgba(${fire.r}, ${fire.g}, ${fire.b}, ${props => props.alpha});
    }

    &.jungle {
        border: 3px solid rgba(${jungle.r}, ${jungle.g}, ${jungle.b}, ${props => props.alpha});
        padding: 0 0.7em;
        background: rgba(${jungle.r}, ${jungle.g}, ${jungle.b}, ${props => props.alpha});
    }
    &.checked {
        border: 3px solid ${white.hex};
    }
`
const Button = ({
    jungle,
    fire,
    icon,
    label,
    onClick,
    className,
    checked,
    width,
    height,
    alpha,
    color,
}) => (
    <StyledButton 
        className={classNames(className, {
            'jungle': (jungle && !fire),
            'fire': (fire && !jungle),
            'checked': checked
        })}
        onClick={onClick}
        width={width}
        alpha={alpha}
        height={height}
        color={color}
        >
        {icon ? icon: label}
    </StyledButton>)

Button.propTypes = {
    checked: PropTypes.bool,
    jungle: PropTypes.bool,
    fire: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.string,
    height:  PropTypes.string,
    alpha: PropTypes.number,
    color:  PropTypes.string,
};

Button.defaultProps = {
    checked: false,
    jungle: false,
    fire: false,
    label: '',
    onClick: () => {},
    className: '',
    width:null,
    height: null,
    alpha:1,
    color: white.hex
}

export default Button;