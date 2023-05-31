import AlbumCard from './album-card'

export default function albums({ posts }) {
  return (
      <section className="album-container container">
        {posts.map((post) => (
          <AlbumCard
            key={post.slug}
            title={post.name}
            coverImage={post.albumCover.url}
            releaseYear={post.releaseYear}
            artistName={post.artistName}
            date={post.favoriteMonth}
            category={post.category}
            slug={post.slug}
            favorite={post.favorite}
          />
        ))}
      </section>
  )
}
