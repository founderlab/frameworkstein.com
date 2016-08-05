import React from 'react'

export default function(name, displayName) {
  return (<a href={`https://www.npmjs.com/package/${name}`} target="_blank">{displayName || name}</a>)
}
