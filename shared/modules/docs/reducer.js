import _ from 'lodash' // eslint-disable-line
import {fromJS} from 'immutable'
import {TYPES} from './actions'

const defaultState = fromJS({
  modules: {},
})

export default function reducer(state=defaultState, action={}) {

  switch (action.type) {
    case TYPES.README_LOAD + '_START':
    case TYPES.CHANGELOG_LOAD + '_START':
      return state.merge({loading: true, errors: {}})

    case TYPES.README_LOAD + '_ERROR':
    case TYPES.CHANGELOG_LOAD + '_ERROR':
      return state.merge({loading: false, errors: {load: action.error || action.res.body && action.res.body.error}})

    case TYPES.README_LOAD + '_SUCCESS':
      return state.merge({
        loading: false,
        errors: {},
      }).mergeDeep({
        modules: action.res.ok ? {[action.module]: {readme: action.res.text}} : {},
      })

    case TYPES.CHANGELOG_LOAD + '_SUCCESS':
      return state.merge({
        loading: false,
        errors: {},
      }).mergeDeep({
        modules: action.res.ok ? {[action.module]: {changelog: action.res.text}} : {},
      })

    default:
      return state
  }
}
