// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();

const theme = {
  styles: {
    global: {
      body: {
        backgroundColor: 'red.100',
      },
    },
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
