import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Flex, Text, InlineBlock, Button } from '../../StyledComponents'

const SvgButton = styled(Button)`
    fill: white;
    &:hover {
        fill: black;
    }
`

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
                        <SvgButton w="2.5rem" mr="2rem" onClick={() => openUrl(link.url)}>
                            {link.svg}
                        </SvgButton>
                    ))
                }
            </Flex>
        </Flex>
    );
}


export default withTheme(Header);