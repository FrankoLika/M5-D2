import React from 'react'
import MyNav from '../components/MyNav'
import MyFooter from '../components/MyFooter'
import Welcome from '../components/Welcome'
import LatestRelease from '../components/LatestRelease'

const Home = () => {
    return (
        <>
            <MyNav />
            <Welcome />
            <LatestRelease />
            <MyFooter />
        </>

    )
}

export default Home