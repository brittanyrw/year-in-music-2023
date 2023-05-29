import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <div class="contentful-image-container">
      <Image src={asset.url} layout="fill" alt={asset.description} loader={contentfulLoader}/>
    </div>
  }

  return null
}
