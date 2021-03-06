import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flex, SvgButton } from '../../StyledComponents'




const darkThemeButton = (changeTheme) => (
    <motion.div
        key="dark"
        initial={{
            x: 800
        }}
        animate={{
            x: 0
        }}
        exit={{
            x: -800
        }}
        whileHover={{
            scale: 1.3,
        }}
        transition={{
            duration: 0.5
        }}>
        <SvgButton w="3rem" fill="#F5F3CE" onClick={changeTheme}>
            <svg
                version="1.1" id="Moon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 20 20" enable-background="new 0 0 20 20" >
                <motion.path
                    animate={{ rotate: 20, y: 2, x: 1 }}
                    transition={{
                        yoyo: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    d="M13.719,1.8c0.686,0.385,1.332,0.867,1.916,1.449c3.42,3.422,3.42,8.966,0,12.386c-3.42,3.42-8.965,3.42-12.386,0
	                c-0.583-0.584-1.065-1.231-1.449-1.916c3.335,1.867,7.633,1.387,10.469-1.449C15.106,9.433,15.587,5.136,13.719,1.8z"/>
            </svg>
        </SvgButton>
    </motion.div >
);

const lightThemeButton = (changeTheme) => (
    <motion.div
        key="light"
        initial={{
            x: 800
        }}
        animate={{
            x: 0
        }}
        exit={{
            x: -800
        }}
        whileHover={{
            scale: 1.3,
        }}
        transition={{
            duration: 0.5
        }}>
        <SvgButton w="3rem" fill="#F28C38" onClick={changeTheme}>
            <svg

                version="1.1" id="Light_up" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 20 20" enable-background="new 0 0 20 20" >
                <motion.path
                    animate={{ rotate: 360 }}
                    transition={{
                        yoyo: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                    }}
                    d="M19,9.199c-0.182,0-0.799,0-0.98,0c-0.553,0-1,0.359-1,0.801c0,0.441,0.447,0.799,1,0.799c0.182,0,0.799,0,0.98,0
                    c0.552,0,1-0.357,1-0.799C20,9.559,19.551,9.199,19,9.199z M10,4.5c-3.051,0-5.5,2.449-5.5,5.5c0,3.051,2.449,5.5,5.5,5.5
                    c3.05,0,5.5-2.449,5.5-5.5C15.5,6.949,13.049,4.5,10,4.5z M10,14c-2.211,0-4-1.791-4-4c0-2.211,1.789-4,4-4c2.209,0,4,1.789,4,4
                    C14,12.209,12.209,14,10,14z M3,10c0-0.441-0.449-0.801-1-0.801c-0.185,0-0.816,0-1,0c-0.553,0-1,0.359-1,0.801
                    c0,0.441,0.447,0.799,1,0.799c0.184,0,0.815,0,1,0C2.551,10.799,3,10.441,3,10z M10,3c0.441,0,0.799-0.447,0.799-1
                    c0-0.184,0-0.816,0-1c0-0.553-0.358-1-0.799-1C9.558,0,9.199,0.447,9.199,1c0,0.184,0,0.816,0,1C9.199,2.553,9.558,3,10,3z M10,17
                    c-0.442,0-0.801,0.447-0.801,1c0,0.184,0,0.816,0,1c0,0.553,0.359,1,0.801,1c0.441,0,0.799-0.447,0.799-1c0-0.184,0-0.816,0-1
                    C10.799,17.447,10.441,17,10,17z M17.365,3.766c0.391-0.391,0.454-0.961,0.142-1.273s-0.883-0.248-1.272,0.143
                    c-0.108,0.107-0.593,0.592-0.7,0.699c-0.391,0.391-0.454,0.961-0.142,1.273s0.883,0.248,1.273-0.143
                    C16.773,4.357,17.257,3.873,17.365,3.766z M3.334,15.533c-0.108,0.109-0.593,0.594-0.7,0.701c-0.391,0.391-0.454,0.959-0.142,1.271
                    s0.883,0.25,1.272-0.141c0.108-0.107,0.593-0.592,0.7-0.699c0.391-0.391,0.454-0.961,0.142-1.274S3.723,15.144,3.334,15.533z
                    M3.765,2.635C3.375,2.244,2.804,2.18,2.492,2.492S2.244,3.375,2.633,3.766c0.108,0.107,0.593,0.592,0.7,0.699
                    c0.391,0.391,0.96,0.455,1.272,0.143s0.249-0.883-0.141-1.273C4.357,3.227,3.873,2.742,3.765,2.635z M15.534,16.666
                    c0.108,0.107,0.593,0.592,0.7,0.699c0.391,0.391,0.96,0.453,1.272,0.143c0.312-0.312,0.249-0.883-0.142-1.273
                    c-0.107-0.107-0.592-0.592-0.699-0.699c-0.391-0.391-0.961-0.455-1.274-0.143S15.143,16.275,15.534,16.666z"/>
            </svg>
        </SvgButton>
    </motion.div >
);


function ThemeSwitch({ changeTheme, isDark }) {
    return (
        <Flex hcenter pt="1rem">
            <AnimatePresence exitBeforeEnter>
                {
                    isDark ? darkThemeButton(changeTheme) : lightThemeButton(changeTheme)
                }
            </AnimatePresence>
        </Flex>
    );
}

export default ThemeSwitch;