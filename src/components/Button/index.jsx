import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import classNames from 'classnames';
import { cssConstants } from '../../config/cssConstants.js';

const { fire, jungle, white } = cssConstants.colors;

const StyledButton = styled.button`
    color: ${white.hex};
    text-transform: uppercase;
    text-decoration: none;
    background: rgba(${white.r}, ${white.g}, ${white.b}, 0.1);
    padding: 10px 20px;
    border: 2px solid ${white.hex};
    display: inline-block;

    &.fire {
        border: ${fire.hex};
        padding: 10px;
        background: ${fire.hex}
    }

    &.jungle {
        border: ${jungle.hex};
        padding: 10px;
        background: ${jungle.hex}
    }
`
const Button = ({
    jungle,
    fire,
    icon,
    label,
    onClick,
    className,
    ...props
}) => (
    <StyledButton 
        className={classNames(className, {
            'jungle': (jungle && !fire),
            'fire': (fire && !jungle)
        })}
        onClick={onClick}
        {...props}
        >
        {icon ? icon: label}
    </StyledButton>)

Button.propTypes = {
    jungle: PropTypes.bool,
    fire: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    className: PropTypes.string
};

Button.defaultProps = {
    jungle: false,
    fire: false,
    label: '',
    onClick: () => {},
    className: ''

}

export default Button;