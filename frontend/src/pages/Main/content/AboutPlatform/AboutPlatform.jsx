import MainContentContainer from 'components/_GlobalComponents/MainContentContainer'
import AboutPlatformComponent from 'components/MainPageComponents/AboutPlatformComponent'
import { memo } from 'react'

function AboutPlatform() {
    return(
        <MainContentContainer>
            <AboutPlatformComponent />
        </MainContentContainer>
    )
}

export default memo(AboutPlatform)