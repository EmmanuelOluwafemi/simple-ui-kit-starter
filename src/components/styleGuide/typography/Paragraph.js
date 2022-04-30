import styled from "styled-components"
import { H1 } from "./Heading"

const handleSize = (theme, size) => {
    switch(size) {
        case "large":
            return theme.fontSize.lg;
        case "medium":
            return theme.fontSize.md;
        case "small":
            return theme.fontSize.sm;
        default:
            return theme.fontSize.lg;
    }
}

export const P = styled(H1).attrs(props => ({
    as: 'p'
}))`
    font-size: ${({ theme, size }) => handleSize(theme, size)};
    font-weight: ${({ theme, weight }) => weight === "medium" ? theme.fontWeight.medium : theme.fontWeight.small};
    line-height: ${({ theme }) => theme.lineHeight.lg};
    max-width: ${({ maxWidth }) => maxWidth || "100%"};
`