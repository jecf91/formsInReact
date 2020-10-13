import React from 'react'

export default function Error({ touched, message }) {
  if (!touched) {
    return <div>&nbsp;</div>
  }
  if (message) {
    return <div>{message}</div>
  }
  return <div>All good!</div>
}
