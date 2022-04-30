import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    flex-wrap: ${({ wrap }) => wrap || "nowrap"};
    justify-content: ${({ justify }) => justify || "flex-start"};
    align-items: ${({ align }) => align || "flex-start"};
    gap: ${({ gap }) => gap || "0"};
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    height: ${({ height }) => height || "auto"};
    width: ${({ width }) => width || "auto"};
    max-width: ${({ maxWidth }) => maxWidth || "100%"};
    max-height: ${({ maxHeight }) => maxHeight || "100%"};
`