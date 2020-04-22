import React from 'react';
import { Flex, Text, InlineBlock } from '../../StyledComponents'
import ProjectItem from './ProjectItem';


function Project() {
    return (
        <Flex vertical>
            <Flex bg="gray" p="2rem" hcenter>
                <Text bold fs="2rem">
                    Personal Projects
                </Text>
            </Flex>
            <Flex bg="pink" p="2rem" hcenter>
                <ProjectItem />
            </Flex>
        </Flex>
    );
}

export default Project