
import React from 'react'
import { Content } from './Content/Content';

export const Layout: React.FC = ({children}) => {
    return (
        <Content>{children}</Content>
    )
}
