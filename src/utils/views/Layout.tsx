import React, { FunctionComponent, memo } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { MyToast } from 'utils/views/Toast';
import { ErrorFallback, myErrorHandler } from './Error';

type Props = {
    children: React.ReactNode
}

const View: FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={myErrorHandler}
        >
          {props.children}
        </ErrorBoundary>
        <MyToast />
      </header>
    </div>
  )
}

export const MyLayout = memo(View);
