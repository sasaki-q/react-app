import React, { FunctionComponent, memo } from 'react'
import { MyToast } from 'utils/views/Toast';

type Props = {
    children: React.ReactNode
}

const View: FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        {props.children}
        <MyToast />
      </header>
    </div>
  )
}

export const MyLayout = memo(View);
