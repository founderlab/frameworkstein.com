import _ from 'lodash' // eslint-disable-line
import request from 'superagent'

const readmeUrl = name => `https://raw.githubusercontent.com/founderlab/${name}/master/readme.md`
const changelogUrl = name => `https://raw.githubusercontent.com/founderlab/${name}/master/changelog.md`

export const TYPES = {
  README_LOAD: 'README_LOAD',
  CHANGELOG_LOAD: 'CHANGELOG_LOAD',
}

export function loadReadme(moduleSlug, callback) {
  const url = readmeUrl(moduleSlug)
  return {
    type: TYPES.README_LOAD,
    request: request.get(url),
    createdAt: new Date(),
    module: moduleSlug,
    callback,
  }
}

export function loadChangelog(moduleSlug, callback) {
  const url = changelogUrl(moduleSlug)
  return {
    type: TYPES.CHANGELOG_LOAD,
    request: request.get(url),
    createdAt: new Date(),
    module: moduleSlug,
    callback,
  }
}
