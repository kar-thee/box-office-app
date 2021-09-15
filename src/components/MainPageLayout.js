/* eslint-disable arrow-body-style */
import React from 'react'
import Navigation from './Navigation'
import Title from './Title'

const MainPageLayout = ({children}) => {
    return (
        <>
            <Title 
            title="Box Office" 
            subtitle="Do You want to search for a movie or an actor?" />
            
            <Navigation/>

            {children}
        </>
    )
}

export default MainPageLayout
