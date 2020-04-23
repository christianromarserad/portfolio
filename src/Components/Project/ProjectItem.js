import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Flex, InlineBlock, Text, Button } from '../../StyledComponents';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

const SvgButton = styled(Button)`
    fill: white;
`

const Svg = styled(InlineBlock)`
    fill: white;
`

const ProjectBlock = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            flex-wrap: wrap;
        }
    }
`

const Video = styled.video`
    @media only screen and (max-width: 1000px) {
        & {
            width: 100%;
        }
    }
`

const Technology = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            flex-wrap: wrap;
        }
    }
`

function ProjectItem({ name, description, technologies, links, videoUrl, theme }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <ProjectBlock bg={theme.cardColor} w="100%" p="2rem" mt="1rem" mb="1rem" br="5px">
            <Video width="470px" autoPlay muted loop playsInline>
                <source src={videoUrl} type="video/mp4" />
            </Video>

            <Flex flexGrow="1" p="1rem" vertical>
                <Flex>
                    <Text ff={theme.fontFamilyHeading} fs="2rem" >
                        {name}
                    </Text>
                </Flex>

                <Flex pt="1rem">
                    <Text bold fs="1rem" >
                        {description}
                    </Text>
                </Flex>

                <Technology vcenter pb="4rem" pt="1rem">
                    {
                        technologies.map((technology) => (
                            <Flex p="0.1rem" mr="1.2rem" br="10px" vertical vcenter>
                                <Svg w="1rem">
                                    {technology.svg}
                                </Svg>
                                <Text fs="0.6rem" mt="3px">{technology.name}</Text>
                            </Flex>
                        ))
                    }
                </Technology>

                <Flex>
                    {
                        links.map((link) => (

                            <SvgButton w="1.6rem" mr="1rem" onClick={() => openUrl(link.url)}>
                                <motion.div
                                    whileHover={{
                                        scale: 1.3,
                                    }}>
                                    {link.svg}
                                </motion.div>
                            </SvgButton>

                        ))
                    }
                </Flex>
            </Flex>
        </ProjectBlock >
    );
}

export default withTheme(ProjectItem);