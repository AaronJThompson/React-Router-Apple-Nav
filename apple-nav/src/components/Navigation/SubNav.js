import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SubNav(props) {
    const { path, label } = props;

    return (
        <Link to={path}>label</Link>
    )
}