import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import './app.less'

@connect(
  state => ({})
)
export default class Main extends Component {

  static propTypes = {
    children: PropTypes.any.isRequired
  }

  render () {
    return (
      <div className='ui grid cb-container'>
        <div className='four wide column'>
          <div className='ui secondary vertical pointing fluid menu'>
            <a className="item active">
              Bio
            </a>
            <a className="item">
              Pics
            </a>
            <a className="item">
              Companies
            </a>
            <a className="item">
              Links
            </a>
          </div>
        </div>
        <div className='twelve wide stretched column'>
          {/* this will render the child routes */}
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}
