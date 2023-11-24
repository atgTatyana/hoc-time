import { IList } from "../App"
import { Video } from "./Video"

interface VideoListProps {
  list: IList[],
}

export const VideoList = ({ list }: VideoListProps) => {
  return (
    <>
      {list.map(item => <Video key={crypto.randomUUID()} url={item.url} date={item.date} />)}
    </>
  )
}
