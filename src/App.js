import React, { useState } from 'react';
import { Flex, InlineBlock } from './StyledComponents'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Project from './Components/Project';
import userInfo from './Configurations/UserInfo';
import { themeDark, themeLight } from './Configurations/ThemeInfo';
import Skills from './Components/Skills';
import ThemeSwitch from './Components/ThemeSwitch';



const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    font-family: ${(props) => props.theme.fontFamily};
    &, * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-transition: background-color 1s ease-out;
      -moz-transition: background-color 1s ease-out;
      -o-transition: background-color 1s ease-out;
      transition: background-color 1s ease-out;
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
  const [theme, setTheme] = useState({
    isDark: true,
    themeInfo: themeDark
  });

  const changeTheme = () => {
    if (theme.isDark) {
      setTheme({
        isDark: false,
        themeInfo: themeLight
      })
    }
    else {
      setTheme({
        isDark: true,
        themeInfo: themeDark
      })
    }
  }

  return (
    <ThemeProvider theme={theme.themeInfo}>
      <GlobalStyle whiteColor />
      <Flex hcenter>
        <MainContainer w="1200px">
          <ThemeSwitch changeTheme={changeTheme} isDark={theme.isDark} />
          <Header header={userInfo.header} />
          <Project projects={userInfo.project} />
          <Skills skills={userInfo.skills} />
        </MainContainer>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
