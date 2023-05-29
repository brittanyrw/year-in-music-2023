import Albums from '../components/albums'
import Hero from '../components/hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Jam with Contentful</title>
        </Head>
        <Hero />
        <section className="home-albums">
          {allPosts.length > 0 && <Albums posts={allPosts} />}
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
