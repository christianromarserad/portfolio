import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, Text, InlineBlock } from '../../StyledComponents'
import ProjectItem from './ProjectItem';
import styled from 'styled-components';

function Project({ projects, theme }) {
    return (
        <Flex vertical p="1rem">
            <Flex hcenter mt="3rem" mb="2rem">
                <Text lighter ff={theme.fontFamilyHeading} fs="2rem">
                    Personal Projects
                </Text>
            </Flex>
            <Flex vertical vcenter>
                {
                    projects.map((project) => (
                        <ProjectItem
                            name={project.name}
                            description={project.description}
                            technologies={project.technologies}
                            videoUrl={project.videoUrl}
                            links={project.links} />
                    ))
                }
            </Flex>
        </Flex >
    );
}

export default withTheme(Project)