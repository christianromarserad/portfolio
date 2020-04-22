import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, Text, InlineBlock } from '../../StyledComponents'
import ProjectItem from './ProjectItem';


function Project({ projects, theme }) {
    return (
        <Flex vertical>
            <Flex p="2rem" hcenter>
                <Text lighter ff={theme.fontFamilyHeading} fs="2rem">
                    Personal Projects
                </Text>
            </Flex>
            <Flex p="2rem" hcenter>
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

export default withTheme(Project)