import React, { FunctionComponent } from 'react'
import { MyToast } from 'components/elements/Toast';

type Props = {
    children: React.ReactNode
}

export const MyLayout: FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {props.children}
        <MyToast />
      </header>
    </div>
  )
}
