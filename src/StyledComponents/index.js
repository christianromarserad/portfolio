import styled from 'styled-components';

export const InlineBlock = styled.div`
    display: inline-block;
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
`

export const Button = styled(InlineBlock)`
    cursor: pointer;
`

export const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props => props.flexDirection}; 
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.backgroundColor};
    padding: ${props => props.padding};
    flex-grow: ${props => props.flexGrow};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
`