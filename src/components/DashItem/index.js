import React from 'react'
import * as C from './style'

const DashItem = ({title, Icon, value}) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon/>
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>

  )
}

export default DashItem;