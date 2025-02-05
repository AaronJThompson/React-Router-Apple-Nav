import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { Route } from 'react-router-dom';
import SubNav from './SubNav';


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

const StyledSubNavBar = styled.div`
    width:100%;
    max-width: 950px;
    height: 8rem;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export default class NavWrapper extends React.Component {

    getSubScreens = (path) => {
        if (this.props.screens)
            return (this.props.screens.find((screen) => `/${path}` === screen.path) || {}).subScreens
    }

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
                <Route path='/:product' render={pr => {
                    let subScreens = this.getSubScreens(pr.match.params.product);
                    if (!subScreens)
                        return null;
                    return (
                        <StyledSubNavBar>
                            {
                                subScreens.map(screen => <SubNav path={screen.path} label={screen.name} icon={screen.icon} />)
                            }
                        </StyledSubNavBar>
                    )
                }}/>
            </StyledNavBar>
        )
    }
}