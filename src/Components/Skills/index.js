import React from 'react';
import styled, { withTheme } from 'styled-components';
import { InlineBlock, Flex, Text } from '../../StyledComponents'

const Svg = styled(InlineBlock)`
    fill: white;
`

const SkillsBlock = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

function Skills({ theme, skills }) {
    return (
        <Flex vcenter mt="3rem" mb="2rem" vertical w="100%">
            <Text lighter ff={theme.fontFamilyHeading} fs="2rem" p="2rem">
                Main Skills
            </Text>
            <SkillsBlock hcenter w="100%">
                {
                    skills.map((skill) => (
                        <Flex w="6rem" m="0.5rem" p="0.5rem" br="5px" vertical vcenter bg={theme.cardColor}>
                            <Svg w="1.5rem">
                                {skill.svg}
                            </Svg>
                            <Text fs="0.7rem" mt="5px">
                                {skill.name}
                            </Text>
                        </Flex>
                    ))
                }
            </SkillsBlock>
        </Flex>
    );
}

export default withTheme(Skills);