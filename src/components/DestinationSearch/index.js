// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {search: ''}

  onChangeValue = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {search} = this.state
    const filteredList = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(search.toLowerCase()),
    )

    return (
      <div className="search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-input-container">
          <input
            type="search"
            placeholder="search"
            className="inputEl"
            value={search}
            onChange={this.onChangeValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="icon"
          />
        </div>
        <ul className="ul">
          {filteredList.map(eachList => (
            <DestinationItem imageList={eachList} key={eachList.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
