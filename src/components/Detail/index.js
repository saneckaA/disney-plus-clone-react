import React from 'react'
import {
    Container,
    Background,
    Logo,
    Controls,
    PlayButton,
    TrailerButton,
    AddButton,
    GroupWatchButton,
    Specification,
    Description,
    Section,
    Recommendation,
    Details

} from './styled';


function Detail() {
    return (
        <Container>
            <Background>
                <img src="/images/avatar-background.jpg" />
            </Background>
            <Logo>
                <img src="/images/avatar-logo.jpg" />
            </Logo>
            <Specification>
                <img src="/images/12-pic.png" />
                <img src="/images/add-pic.png" />
                <img src="/images/cc-pic.png" />
                <span>2009 • 2h30min</span>
            </Specification>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>
                        +
                    </span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <Description>
                Avatar zabiera nas do niesamowitego świata Pandory, gdzie mężczyzna wyrusza na epicką przygodę,
                walcząc o ocalenie zarówno ludzi, których kocha, jak i miejsca, któte teraz nazywa domem.
            </Description>
            <Section>
                <Recommendation>Proponowane</Recommendation>
                <Details>Szczegóły</Details>
            </Section>
        </Container>
    )
}

export default Detail;
