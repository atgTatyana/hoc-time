import DateTime from "./DateTime"

interface VideoProps {
  url: string,
  date: string,
}

export const Video = ({ url, date }: VideoProps) => {
  return (
    <div className="video">
      <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <DateTime date={date} />
    </div>
  )
}
