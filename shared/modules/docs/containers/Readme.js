import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'
import Helmet from 'react-helmet'
import {loadReadme} from '../actions'
import Loader from '../../utils/components/Loader'
import NotFound from '../../utils/components/NotFound'
import MarkdownPage from '../components/MarkdownPage'

@connect(state => ({docs: state.docs, slug: state.router.params.slug}), {pushState})
export default class ReadmeContainer extends Component {

  static propTypes = {
    docs: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
    pushState: PropTypes.func.isRequired,
  }

  static fetchData({store, action}, callback) {
    const {docs, router} = store.getState()
    const slug = ((action && action.payload && action.payload.params) || router.params).slug
    if (docs.get('modules').get(slug) && docs.get('modules').get(slug).get('readme')) return callback()

    store.dispatch(loadReadme(slug, (err, action) => {
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

    const readme = docIm.get('readme')
    if (!readme) return (<NotFound />)

    return (
      <div>
        <Helmet title={slug} />
        <MarkdownPage markdown={readme} />
      </div>
    )
  }
}
