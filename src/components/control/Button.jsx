import styled from "styled-components"

import { IoArrowForwardCircleOutline } from 'react-icons/io5';

function handleVariant(theme, variant){
    switch(variant){
        case "primary":
            return `background: ${theme.colors.primary.main}; color: ${theme.colors.neutral.g10};`
        case "secondary":
            return `background: ${theme.colors.primary.bg_color}; color: ${theme.colors.primary.main};`
        case "outline":
            return `background: ${theme.colors.primary.bg_color}; color: ${theme.colors.primary.main}; border: 1px solid ${theme.colors.primary.border};`
        case "text":
            return `background: none; color: color: ${theme.colors.primary.main};`
        default:
            return `background: ${theme.colors.primary.main}; color: ${theme.colors.neutral.g10};`
    }
}

export const Button = ({ text, icon, onClick, variant }) => {
    return (
        <StyedButton 
            variant={variant} 
            onClick={onClick}
            icon={icon}
        >
            {text && text}
            { icon && <IoArrowForwardCircleOutline />}
        </StyedButton>
    )
}

const StyedButton = styled.button`
    border: none;
    outline: none;
    ${({ theme, variant }) => handleVariant(theme, variant)};
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: ${({ theme, size }) => size === "large" ? theme.fontSize.lg : theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    padding: ${({ icon }) => icon ? "0.5rem" : "0.5rem 1rem"};
    margin: ${({ margin }) => margin ? margin : "0"};
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
`