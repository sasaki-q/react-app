import React, { FunctionComponent, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { QueryClient, QueryClientProvider } from "react-query"
import { ErrorFallback, myErrorHandler } from "utils/views/Error"
import { Loading } from "utils/views/Loading"

const client: QueryClient = new QueryClient();

type Props = {
    children: React.ReactNode
}

export const AppProvider: FunctionComponent<Props> = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loading />}>
          <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onError={myErrorHandler}
          >
            <HelmetProvider>
                <QueryClientProvider client={client}>
                  {props.children}
                </QueryClientProvider>
            </HelmetProvider>
          </ErrorBoundary>
        </Suspense>
      </header>
    </div>
  )
}
