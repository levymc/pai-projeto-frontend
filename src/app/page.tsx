"use client"
import Image from 'next/image'
import BodyPosts from '../components/BodyPost'
import styled from 'styled-components'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <Container>
      <NavBar />
      <BodyPosts />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 10em;
  position: relative;
`
