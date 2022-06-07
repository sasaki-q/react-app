import { AuthProvider } from "lib/auth"
import React, { FunctionComponent, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { DefaultOptions, QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorFallback, myErrorHandler } from "components/elements/Error"
import { MyLayout } from "components/elements/Layout"
import { Loading } from "components/elements/Loading"

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000000,
  },
};

export const queryClient: QueryClient = new QueryClient({ defaultOptions: queryConfig });

type Props = {
    children: React.ReactNode
}

export const AppProvider: FunctionComponent<Props> = (props) => (
  <Suspense fallback={<Loading />}>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={myErrorHandler}
    >
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <MyLayout>
              {props.children}
            </MyLayout>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </Suspense>
);
