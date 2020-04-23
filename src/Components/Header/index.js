import React from 'react';
import styled, { withTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { Flex, Text, InlineBlock, Button } from '../../StyledComponents'

const SvgButton = styled(Button)`
    fill: white;
`
const UserInfo = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            width: 100%;
            padding: 1rem;
        }
    }
`

const Links = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            width: 100%;
            align-items: start;
            padding: 1rem;
        }
    }
`

const HeaderBlock = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            flex-wrap: wrap;
        }
    }
`

function Header({ theme, header: { personName, profession, message, links } }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <HeaderBlock>
            <UserInfo w="100%" vertical p="8rem">
                <Text fs="3.5rem" ff={theme.fontFamilyHeading}>{personName}</Text>
                <Text fs="1.6rem" mb="1.6rem">{profession}</Text>
                <Text w="80%">{message}</Text>
            </UserInfo>

            <Links w="100%" vcenter p="3rem">
                {
                    links.map((link) => (
                        <SvgButton w="2.5rem" mr="2rem" onClick={() => openUrl(link.url)}>
                            <motion.div
                                whileHover={{
                                    scale: 1.3,
                                }}>
                                {link.svg}
                            </motion.div>
                        </SvgButton>
                    ))
                }
            </Links>
        </HeaderBlock>
    );
}


export default withTheme(Header);