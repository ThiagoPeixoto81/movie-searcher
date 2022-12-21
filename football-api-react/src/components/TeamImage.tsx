import React from 'react'

type SearchTeamProps = {
    url?: string
}

export default function TeamImage(props: SearchTeamProps) {
  return (
    <img src={props.url} />
  )
}
