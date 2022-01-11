import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Container from '../components/Container';
import userData from '@constants/data';

export default function Home() {
  return (
    <Container
      title='Thomas Anda - Developer, Musician and Composer'
      description='FullStack JavaScript Developer'
    ></Container>
  )
}