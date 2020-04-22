import React from 'react';
import { Flex, Text, InlineBlock, Button } from '../../StyledComponents'


function Header({ header: { personName, profession, message, links } }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Flex h="400px">
            <Flex bg="red" w="50%" vertical p="8rem">
                <Text bolder fs="3rem" >{personName}</Text>
                <Text bold fs="1.5rem">{profession}</Text>
                <Text>{message}</Text>
            </Flex>

            <Flex bg="green" w="50%" vcenter p="3rem">
                {
                    links.map((link) => (
                        <Button h="50px" w="25%" bg="red" onClick={() => openUrl(link.url)}>
                            {link.svg}
                        </Button>
                    ))
                }
            </Flex>
        </Flex>
    );
}


export default Header;