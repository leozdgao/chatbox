import React, { Component, PropTypes as T } from 'react'
import { Link } from 'react-router'
import { FullScreenPanel, Editor, LeanInput, Spinner } from '../../components'
import './newpost.less'

class NewPost extends Component {
  static propTypes = {

  }

  static contextTypes = {
    currentUser: T.object
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      editorLoading: true,
      editorLoadFailed: false
    }
  }

  render () {
    const { currentUser: { avatar, name } } = this.context

    return (
      <FullScreenPanel className="newpost">
        <Link to="/doc" className="close"><i className="fa fa-times"></i></Link>
        <div className="container content">
          <div className="profile">
            <div className="circle-img sm-img inline-block"><img src={avatar} /></div>
            <span>
              <b>{name}</b> is writing...
            </span>
          </div>
          {this.state.editorLoadFailed ? this._getFailedContent() : (
            <form>
              <div className="form-group">
                <LeanInput className="title" placeholder="Title" autoFocus />
              </div>
              <div className="form-group">
                <Editor ref="editor" onLoad={::this._editorLoaded} onError={::this._editorError}  />
              </div>
              <a className="btn btn-success" onClick={::this._handlePublish}>Publish</a>
            </form>
          )}
          {this.state.editorLoading && <Spinner />}
        </div>
      </FullScreenPanel>
    )
  }

  _getFailedContent () {
    return (
      <div>
        <a className="btn btn-success" onClick={::this._reload}>Reload</a>
      </div>
    )
  }

  _editorLoaded () {
    this.setState({
      editorLoading: false,
      editorLoadFailed: false
    })
  }

  _editorError () {
    this.setState({
      editorLoading: false,
      editorLoadFailed: true
    })
  }

  _reload () {
    this.setState({
      editorLoading: true,
      editorLoadFailed: false
    })
  }

  _handlePublish () {
    console.log(this.refs.editor.value)
  }
}

export default NewPost
