// Write your code here
import './index.css'

const DestinationItem = props => {
  const {imageList} = props
  const {name, imgUrl} = imageList

  return (
    <li className="listItem">
      <img src={imgUrl} className="image" alt={name} />
      <p className="image-heading">{name}</p>
    </li>
  )
}

export default DestinationItem
