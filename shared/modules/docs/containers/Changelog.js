import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'
import Helmet from 'react-helmet'
import {loadChangelog} from '../actions'
import Loader from '../../utils/components/Loader'
import NotFound from '../../utils/components/NotFound'
import MarkdownPage from '../components/MarkdownPage'

@connect(state => ({docs: state.docs, slug: state.router.params.slug}), {pushState})
export default class ChangelogContainer extends Component {

  static propTypes = {
    docs: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
    pushState: PropTypes.func.isRequired,
  }

  static fetchData({store, action}, callback) {
    const {docs, router} = store.getState()
    const slug = ((action && action.payload && action.payload.params) || router.params).slug
    if (docs.get('modules').get(slug) && docs.get('modules').get(slug).get('changelog')) return callback()

    store.dispatch(loadChangelog(slug, (err, action) => {
      if (err) return callback(err)
      if (!action.res) return callback(null, {status: 404})
      callback()
    }))
  }

  render() {
    if (this.props.docs.get('loading')) return (<Loader />)

    const {docs, slug} = this.props
    const docIm = docs.get('modules').get(slug)
    if (!docIm) return (<NotFound />)

    const changelog = docIm.get('changelog')
    if (!changelog) return (<NotFound />)

    return (
      <div>
        <Helmet title={slug} />
        <MarkdownPage markdown={changelog} />
      </div>
    )
  }
}
