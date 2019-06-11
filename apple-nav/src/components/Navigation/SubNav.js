import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavIcon = styled.div`
    display: inline-block;
    height: 5rem;
    width: 5rem;
    background-image: url(${props => props.icon || ""});
    background-size:contain;
    background-repeat: no-repeat;
    background-position-x: 50%;
`;
const StyledLink = styled(Link)`
    font-size:0.7rem;
    text-align: center;
`;
export default function SubNav(props) {
    const { path, label, icon } = props;

    return (
        <StyledLink to={path}>
            <NavIcon icon={icon} />
            {label}
        </StyledLink>
    )
}