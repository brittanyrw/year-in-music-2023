import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function PostHeader({ title, coverImage, date, artist, category }) {
  return (
    <>
      <div className="album-page-header">
        <CoverImage title={title} url={coverImage} height="400" width="400" className="album-page-image" />
        <div className="album-page-info">
          <h2>{monthNames[new Date(date).getUTCMonth()]}</h2>
          <PostTitle>{title} ({date})</PostTitle>
          <p className="album-page-subtitle">{artist}</p>
          <ul className="music-labels">
            {category?.map((item) => <li className="category" key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}
