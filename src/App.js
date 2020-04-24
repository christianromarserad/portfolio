import React, { useState } from 'react';
import { Flex, InlineBlock } from './StyledComponents'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Project from './Components/Project';
import userInfo from './Configurations/UserInfo';
import themeInfo from './Configurations/ThemeInfo';
import Skills from './Components/Skills';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: ${(props) => props.theme.fontFamily};
    &, * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`

const MainContainer = styled(InlineBlock)`
  @media only screen and (max-width: 1200px) {
    & {
      width: 100vw;
    }
  }
`

function App() {
  return (
    <ThemeProvider theme={themeInfo}>
      <GlobalStyle whiteColor />
      <Flex hcenter>
        <MainContainer w="1200px">
          <Header header={userInfo.header} />
          <Project projects={userInfo.project} />
          <Skills skills={userInfo.skills} />
        </MainContainer>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
