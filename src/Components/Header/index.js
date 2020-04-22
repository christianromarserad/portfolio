import React from 'react';
import { Flex, Text, InlineBlock } from '../../StyledComponents'


function Header() {
    return (
        <Flex h="400px">
            <Flex bg="red" w="50%" vertical p="8rem">
                <Text bolder fs="3rem" >Christian Serad</Text>
                <Text bold fs="1.5rem">Software Developer</Text>
                <Text>Description</Text>
            </Flex>

            <Flex bg="green" w="50%" vcenter p="3rem">
                <InlineBlock h="50px" w="25%" bg="red">
                    github
                </InlineBlock>
                <InlineBlock h="50px" w="25%" bg="blue">
                    linkedin
                </InlineBlock>
                <InlineBlock h="50px" w="25%" bg="yellow">
                    email
                </InlineBlock>
                <InlineBlock h="50px" w="25%" bg="pink">
                    resume
                </InlineBlock>
            </Flex>
        </Flex>
    );
}


export default Header;