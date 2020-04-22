import React from 'react';
import { Flex, Text, InlineBlock } from '../../StyledComponents'
import ProjectItem from './ProjectItem';


function Project({ projects }) {
    return (
        <Flex vertical>
            <Flex bg="gray" p="2rem" hcenter>
                <Text bold fs="2rem">
                    Personal Projects
                </Text>
            </Flex>
            <Flex bg="pink" p="2rem" hcenter>
                {
                    projects.map((project) => (
                        <ProjectItem
                            name={project.name}
                            description={project.description}
                            technologies={project.technologies}
                            links={project.links} />
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default Project