import Container from '../components/Container';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import userData from '@constants/data';
import getLatestRepos from '@lib/getLatestRepos';

export default function Home({ repositories }) {
  return (
    <Container
      title='Thomas Anda - Developer, Musician and Composer'
      description='FullStack JavaScript Developer'
    >
      <Hero />
      <LatestCode repositories={repositories} />
    </Container>
  )
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};

