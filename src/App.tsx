import React from 'react';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import AppRouter from './views';
import { theme } from "./theme";
import { ThemeProvider } from '@mui/private-theming';
import { CssBaseline } from '@mui/material';


const queryClient = new QueryClient();

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const ilogs = urlParams.get('ilogs');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}
        >
          <AppRouter />
        </ErrorBoundary>

        {ilogs != null ? (<ReactQueryDevtools />) : undefined}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
