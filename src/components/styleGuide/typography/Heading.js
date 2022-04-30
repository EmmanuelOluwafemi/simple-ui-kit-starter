import styled from "styled-components"

export const H1 = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: ${({ theme }) => theme.lineHeight.xxxl};
    color: ${({ theme, color }) => color ? color : theme.colors.neutral.g100};
    padding: ${({ padding }) => padding ? padding : "0"};
    text-align: ${({ align }) => align ? align : "left"};
    margin: ${({ margin }) => margin ? margin : "0"};
    max-width: ${({ maxWidth }) => maxWidth || "100%"};
`

export const H2 = styled(H1).attrs(props => ({
    as: 'h2'
}))`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: ${({ theme }) => theme.lineHeight.xxl};
`

export const H3 = styled(H1).attrs(props => ({
    as: 'h3'
}))`
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: ${({ theme }) => theme.lineHeight.xl};
`