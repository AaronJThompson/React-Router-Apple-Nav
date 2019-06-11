import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.header`
    width: 100%;
    height: 3rem;
    background: rgba(45,45,45,0.98);
    nav{
        width: 100%;
        max-width: 980px;
        margin: 0 auto;
        height: 100%;
        display:flex;
        justify-content: space-between;
    }
`;

export default class NavWrapper extends React.Component {
    render() {
        return (
            <StyledNavBar>
                <nav>

                </nav>
            </StyledNavBar>
        )
    }
}