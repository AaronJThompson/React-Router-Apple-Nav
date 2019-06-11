import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
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
        align-items: center;
    }
`;

export default class NavWrapper extends React.Component {
    render() {
        const { screens } = this.props;
        return (
            <StyledNavBar>
                <nav>
                    {
                        screens.map(screen => {
                            return <Nav path={screen.path} label={screen.name} />
                        })
                    }
                </nav>
            </StyledNavBar>
        )
    }
}