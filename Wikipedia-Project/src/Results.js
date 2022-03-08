import React, { Component } from 'react'

export default class Results extends Component {
  render() {

    console.log(this.props.wiki[3])

    const { wiki } = this.props

    return (
      <div>
        <h3>{wiki[0] ? <>"{wiki[0]}" için arama sonuçları..</> : null}</h3>

        <ul>
          {wiki[3]?.map((item, i) => <li key={i}><a href={item}>{item}</a> </li>)}
          {/* {wiki ? wiki[3].map((item, i) => <li key={i}><a href={item}>{item}</a> </li>) : null} */}
        </ul>

      </div>
    )
  }
}