import React from 'react';
import { Flex, InlineBlock, Text, Button } from '../../StyledComponents';

function ProjectItem() {
    return (
        <Flex h="300px" bg="red" w="100%" p="2rem">
            <InlineBlock bg="green" w="50%">

            </InlineBlock>
            <Flex bg="gray" w="50%" vertical>
                <Text bolder fs="2rem" m="1rem">
                    Big Calorie
                </Text>
                <Text bold fs="1rem" ml="1rem">
                    Description
                </Text>
                <Flex m="1rem">
                    <Text bold fs="1rem" mr="1rem">
                        Technologies
                    </Text>
                    <InlineBlock bg="red">
                        React
                    </InlineBlock>
                    <InlineBlock bg="blue">
                        Redux
                    </InlineBlock>
                    <InlineBlock bg="pink">
                        Express
                    </InlineBlock>
                </Flex>

                <Flex m="1rem">
                    <Button bg="red">
                        Link
                    </Button>
                    <Button bg="blue">
                        Video
                    </Button>
                    <Button bg="pink" >
                        Github
                    </Button>
                </Flex>
            </Flex>
        </Flex >
    );
}

export default ProjectItem;