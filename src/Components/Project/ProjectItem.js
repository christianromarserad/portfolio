import React from 'react';
import { Flex, InlineBlock, Text, Button } from '../../StyledComponents';

function ProjectItem({ name, description, technologies, links }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Flex h="300px" bg="red" w="100%" p="2rem">
            <InlineBlock bg="green" w="50%">

            </InlineBlock>
            <Flex bg="gray" w="50%" vertical>
                <Text bolder fs="2rem" m="1rem">
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

export default ProjectItem;