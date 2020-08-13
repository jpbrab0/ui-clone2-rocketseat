import React from 'react'

import Header from '../../components/Header'
import TopPageContainer from '../../components/TopPageContainer'
import ConnectionsContainer from '../../components/ConnectionsContainer'
import RewardContainer from '../../components/RewardContainer'
import PostContainer from '../../components/PostContainer'
import Spoiler from '../../components/Spoiler'
import JourneyContainer from '../../components/JourneyContainer'

export default function Menu(){
    return(
        <>
            <Header/>
            <main>
                <TopPageContainer  />
                <ConnectionsContainer/>
                <RewardContainer/>
                <PostContainer/>
                <Spoiler/>
                <JourneyContainer/>
            </main>
        </>
    )
}