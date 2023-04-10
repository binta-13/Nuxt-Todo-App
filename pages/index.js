import { Box, Heading, VStack } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getPosts } from './api/api';

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import From from '../components/From';
import Tables from '../components/Table';
export default function App() {
  const { isLoading, error, data } = useQuery('posts', getPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ChakraProvider>
      <Navbar />
      <From />
      <Tables post={data} />
    </ChakraProvider>
  );
}
