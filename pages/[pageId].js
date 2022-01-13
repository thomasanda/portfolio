import React from "react";

import { NotionAPI } from "notion-client";
import { getPageTitle, getAllPagesInSpace } from 'notion-utils';

import Container from "../components/Container";
import BlogComponent from "../components/BlogComponent";

const notion = new NotionAPI();

export const getStaticProps = async (context) => {
  const pageId = context.params.pageId
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10
  };
};

export const getStaticPaths = async () => {
  const rootNotionPageId = 'a3cfb4b2bc1b4980994d5767ec8d1996'

  const pages = await getAllPagesInSpace(
    rootNotionPageId,
    notion.getPage.bind(notion),
    {
      traverseCollection: false
    }
  )

  const paths = Object.keys(pages).map(pageId => `/${pageId}`)

  return {
    paths,
    fallback: true
  }
}

export default function Blog({ recordMap }) {
  return (
    <Container title="Blog - Thomas Anda">
      <BlogComponent recordMap={recordMap} />
    </Container>
  );
}


