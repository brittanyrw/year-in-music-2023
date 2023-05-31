import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import Albums from '../../components/albums'
import PostHeader from '../../components/post-header'
import Link from 'next/link'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <section className="page">
        <section className="page-header">
          <h2>
            <Link href="/">
              <p className="header-link">👈🏾 Back to List</p>
            </Link>
          </h2>
        </section>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <section className="page-content">
            <article>
              <Head>
                <title>
                  {post.name}
                </title>
                <meta property="og:image" content={post.albumCover.url} />
              </Head>
              <PostHeader
                title={post.name}
                coverImage={post.albumCover.url}
                date={post.releaseYear}
                artist={post.artistName}
                category={post.category}
              />
              <PostBody content={post.thoughts} />
            </article>
            <hr />
            {morePosts && morePosts.length > 0 && (
              <Albums posts={morePosts} />
            )}
            <section />
          </section>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}
