import React from 'react'
import { Button, Icon, Image, Link, Text, UserButtons, Wrapper } from './style';

function Navbar() {
  return (
    <Wrapper>
      <Icon>
        <Image src={'https://appforshare.io/assets/images/logo.png'} />
      </Icon>
      <Link>
        <Text active ={true}>Find your UDID</Text>
        <Text>Blog</Text>
        <Text>Pricing</Text>
        <Text>FAQs</Text>
      </Link>
      <UserButtons>
        <Button primary={true}> sign in </Button>
        <Button> sign up </Button>
      </UserButtons>
    </Wrapper>
  )
}

export default Navbar;