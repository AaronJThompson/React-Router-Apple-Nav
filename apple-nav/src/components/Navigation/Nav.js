import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
    font-size: 0.875rem;
    font-weight: 400;
    font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;;
`;

export default function Nav(props) {
    const { path, label } = props;

    return (
        <StyledLink to={path}>{label}</StyledLink>
    )
} 