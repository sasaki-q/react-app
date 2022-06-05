import { AuthProvider } from "lib/auth"
import React, { FunctionComponent, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { DefaultOptions, QueryClient, QueryClientProvider } from "react-query"
import { ErrorFallback, myErrorHandler } from "utils/views/Error"
import { MyLayout } from "utils/views/Layout"
import { Loading } from "utils/views/Loading"

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
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
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  </Suspense>
);
