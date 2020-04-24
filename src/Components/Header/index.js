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
            padding: 0;
        }
    }
`

const Links = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            width: 100%;
            align-items: start;
            padding: 0;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }
`

const HeaderBlock = styled(Flex)`
    @media only screen and (max-width: 1000px) {
        & {
            flex-wrap: wrap;
            padding: 2rem
        }
    }
`

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const svgItem = {
    hidden: { y: -20 },
    show: { y: 1 }
}

const userInfo = {
    hidden: { x: -600 },
    show: { x: 0 }
}


function Header({ theme, header: { personName, profession, message, links } }) {
    const openUrl = (url) => {
        window.open(url, '_blank');
    }

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show">
            <HeaderBlock>
                <UserInfo w="100%" vertical p="8rem">
                    <motion.div variants={userInfo}>
                        <Text fs="3.5rem" ff={theme.fontFamilyHeading}>{personName}</Text>
                    </motion.div>
                    <motion.div variants={userInfo}>
                        <Text fs="1.6rem" mb="1.6rem">{profession}</Text>
                    </motion.div>
                    <motion.div variants={userInfo}>
                        <Text w="80%">{message}</Text>
                    </motion.div>

                </UserInfo>

                <Links w="100%" vcenter p="3rem">
                    {
                        links.map((link) => (
                            <SvgButton w="2.5rem" mr="2rem" onClick={() => openUrl(link.url)}>
                                <motion.div
                                    variants={svgItem}
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
        </motion.div>
    );
}


export default withTheme(Header);