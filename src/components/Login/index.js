import React from 'react'
import { 
    Container, 
    Content,
    TopLogo, 
    SignUp,
    Description,
    BottomLogo

} from './styled';

function Login() {
    return (
        <Container>
            <Content>
                <TopLogo src="/images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>
                    Get Premier Access to Raya and The Last Dragon for an additional fee
                    with a Disney+ subscitption. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $1.
                </Description>
                <BottomLogo src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login;