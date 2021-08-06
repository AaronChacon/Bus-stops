
import React from 'react'
import { Navbar } from '../components/Navbar';
import { Content } from './Content/Content';

export const Layout: React.FC = ({children}) => {
    return (
        <>
            <Navbar/>
            <Content>{children}</Content>
        </>
    )
}
