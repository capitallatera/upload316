import React from 'react'
import './style.js';
import { Wrapper, Heading, Text } from './style.js';
import Upload from '../Upload/index.js';

function Dashboard() {
  return (
    <Wrapper>
      <div />
      <Heading>Development, Ad-hoc In-house <br />Apps Over The Air Installation</Heading>
      <Text>appforshare.io is a platform where developers can distribute their apps <br /> through OTA (Over The Air) installation to clients.</Text>
      <Upload />
    </Wrapper>
  )
}

export default Dashboard