import React from 'react';
import { withTheme } from 'styled-components';
import { Flex, Text, InlineBlock, Button } from '../../StyledComponents'


function Header({ theme, header: { personName, profession, message, links } }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <Flex h="400px">
            <Flex w="50%" vertical p="8rem">
                <Text fs="3.5rem" ff={theme.fontFamilyHeading}>{personName}</Text>
                <Text fs="1.6rem">{profession}</Text>
                <Text>{message}</Text>
            </Flex>

            <Flex w="50%" vcenter p="3rem">
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


export default withTheme(Header);