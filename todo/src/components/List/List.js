import React from 'react'

export const List = (props) => {
  return (
    <ul className={props.className}>{props.children}</ul>
  )
}
