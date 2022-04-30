import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from './utils'

import { H1, P } from "./components/styleGuide/typography"
import { Button } from "./components/control/Button";
import { Flex } from "./components/layout/Flex";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Flex height="100vh" direction="column" align="center" justify="center" gap="1rem">
        <H1>Heading 1</H1>
        <P align="center" maxWidth="600px" margin="0 0 1rem 0" size="small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</P>
        <Button icon margin="0 0 1rem 0" text="Click me" />
      </Flex>
    </ThemeProvider>
  );
}

export default App;
