import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, InlineBlock, Text, Button } from '../../StyledComponents';

function ProjectItem({ name, description, technologies, links, theme }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Flex h="300px" bg={theme.cardColor} w="100%" p="2rem" m="1rem" br="5px">
            <InlineBlock bg="pink" w="50%">

            </InlineBlock>
            <Flex w="50%" vertical>
                <Text ff={theme.fontFamilyHeading} fs="2rem" m="1rem">
                    {name}
                </Text>
                <Text bold fs="1rem" ml="1rem">
                    {description}
                </Text>
                <Flex m="1rem">
                    <Text bold fs="1rem" mr="1rem">
                        Technologies
                    </Text>
                    {
                        technologies.map((technology) => (
                            <InlineBlock bg="red">
                                {technology.logo || "wala pay logo"}
                            </InlineBlock>
                        ))
                    }
                </Flex>

                <Flex m="1rem">
                    {
                        links.map((link) => (
                            <Button bg="red" onClick={() => openUrl(link.url)}>
                                {link.svg}
                            </Button>
                        ))
                    }
                </Flex>
            </Flex>
        </Flex >
    );
}

export default withTheme(ProjectItem);