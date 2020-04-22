import React, { useState } from 'react';
import { Flex, InlineBlock } from './StyledComponents'
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Components/Header';
import Project from './Components/Project';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const MainContainer = styled.div`
  background-color: ${props => props.backgroundColor};
`

function App() {
  const [state] = useState({
    header: {
      personName: "Christian Serad",
      profession: "Software Developer",
      message: "Hi, I love making websites",
      links: [
        {
          name: "Github",
          url: "https://github.com/christianromarserad",
          svg: <a>Github</a>
        },
        {
          name: "Linked",
          url: "https://www.linkedin.com/in/christian-serad-980951149/",
          svg: <a>Linked</a>
        },
        {
          name: "Email",
          url: "mailto:christianserad123@gmail.com",
          svg: <a>Email</a>
        },
        {
          name: "Resume",
          url: "resume.pdf",
          svg: <a>Resume</a>
        }
      ]
    },
    project: [
      {
        name: "Big Calorie",
        description: "An application that tracks calories",
        technologies: [
          { name: "React", logo: null },
          { name: "Redux", logo: null },
          { name: "TailwindCss", logo: null },
          { name: "Framer Motion", logo: null },
          { name: "Node", logo: null },
        ],
        links: [
          { name: "Website", svg: <a>hi</a>, url: "https://www.youtube.com/watch?v=EKetdJxTkq0&amp;feature=youtu.be" },
          { name: "Github", svg: <a>hi</a>, url: "https://www.youtube.com/watch?v=EKetdJxTkq0&amp;feature=youtu.be" }
        ]
      },
      {
        name: "School Notebook",
        description: "A note taking web application",
        technologies: [
          { name: "React", logo: null },
          { name: "Redux", logo: null },
          { name: "Material UI", logo: null },
          { name: "SQL Server", logo: null },
          { name: "ASP.NET Core", logo: null },
          { name: "Google API", logo: null },
        ],
        links: [
          { name: "Website", svg: <a>hi</a>, url: 'https://schoolnotebook.azurewebsites.net/' },
          { name: "Youtube", svg: <a>hi</a>, url: 'https://www.youtube.com/watch?v=NQ7XKgLHOvU&amp;feature=youtu.be' },
          { name: "Github", svg: <a>hi</a>, url: 'https://github.com/christianromarserad/SchoolNotebook' }
        ]
      },
      {
        name: "Acute Pediatrics Orientation",
        description: "A web application that orients or trains employees",
        technologies: [
          { name: "SQL Server", logo: null },
          { name: "ASP.NET Core", logo: null },
          { name: "Bootstrap", logo: null },
          { name: "jQuery", logo: null },
        ],
        links: [
          { name: "Website", svg: <a>hi</a>, url: 'https://acutepediatricsorientation.azurewebsites.net/' },
          { name: "Youtube", svg: <a>hi</a>, url: 'https://www.youtube.com/watch?v=EKetdJxTkq0&amp;feature=youtu.be' },
          { name: "Github", svg: <a>hi</a>, url: 'https://github.com/christianromarserad/AcutePediatricsOrientation' }
        ]
      },
      {
        name: "Hamilton Spray Pads",
        description: "A web application that locates spray pads in Hamilton, ON.",
        technologies: [
          { name: "jQuery", logo: null },
          { name: "Bootstrap", logo: null },
          { name: "Bing Maps API", logo: null },
        ],
        links: [
          { name: "Website", svg: <a>hi</a>, url: 'https://hamiltonspraypads.now.sh/' },
          { name: "Youtube", svg: <a>hi</a>, url: 'https://www.youtube.com/watch?v=exbx5J5s7KM&amp;feature=youtu.be' },
          { name: "Github", svg: <a>hi</a>, url: 'https://github.com/christianromarserad/HamiltonSprayPads' }
        ]
      }
    ]
  });

  return (
    <>
      <GlobalStyle whiteColor />
      <Flex hcenter>
        <InlineBlock bg="pink" w="1200px">
          <Header header={state.header} />
          <Project projects={state.project} />
        </InlineBlock>
      </Flex>
    </>
  );
}

export default App;
