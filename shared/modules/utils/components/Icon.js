import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'

export default class Icon extends Component {

  static propTypes = {
    root: PropTypes.string,
    extension: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconPath: PropTypes.func.isRequired,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  }

  static defaultProps = {
    extension: '.svg',
    root: '/public',
    iconPath: (root, icon, extension) => `${root}/icons/${icon}${extension}`,
  }

  render() {
    const {root, icon, iconPath, extension} = this.props
    const iconUrl = iconPath(root, icon, extension)

    return (
      <img className={classNames(this.props.className, 'fl-icon')} src={iconUrl} />
    )
  }
}
