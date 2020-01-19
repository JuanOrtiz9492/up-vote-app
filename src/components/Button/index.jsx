import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { cssConstants } from '../../config/cssConstants';

const { fire, jungle, white } = cssConstants.colors;

const StyledButton = styled.button`
    color: ${white.hex};
    text-transform: uppercase;
    text-decoration: none;
    background: rgba(${white.r}, ${white.g}, ${white.b}, 0.1);
    padding: 10px 20px;
    margin 0 0.5em;
    border: 2px solid ${white.hex};
    display: inline-block;
    box-sizing: border-box;
    width: max-content;
    cursor: pointer;

    &:focus {
        outline:0;
    }

    &.fire {
        border: 3px solid ${fire.hex};
        padding: 0 0.7em;
        background: ${fire.hex}
    }

    &.jungle {
        border: 3px solid ${jungle.hex};
        padding: 0 0.7em;
        background: ${jungle.hex}
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
    ...props
}) => (
    <StyledButton 
        className={classNames(className, {
            'jungle': (jungle && !fire),
            'fire': (fire && !jungle),
            'checked': checked
        })}
        onClick={onClick}
        {...props}
        >
        {icon ? icon: label}
    </StyledButton>)

Button.propTypes = {
    checked: PropTypes.bool,
    jungle: PropTypes.bool,
    fire: PropTypes.bool,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    className: PropTypes.string
};

Button.defaultProps = {
    checked: false,
    jungle: false,
    fire: false,
    label: '',
    onClick: () => {},
    className: ''

}

export default Button;