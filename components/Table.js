import {
  Table,
  Thead,
  Tbody,
  Button,
  Tr,
  Th,
  Td,
  TableContainer,
  Tfoot,
} from '@chakra-ui/react';

import Modal from './Modal';

import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const Tables = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});

  const handleOnClick = (post) => {
    setData(post);
    onOpen();
  };
  return (
    <>
      <TableContainer whiteSpace="normal" m={10}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {props.post.map((post) => (
              <Tr key={post.id} bg="gray.50" p="4" borderRadius="md">
                <Td>{post.title}</Td>
                <Td letterSpacing="wide" lineHeight="taller">
                  {post.body}
                </Td>
                <Button onClick={() => handleOnClick({ ...post })}>
                  Open
                </Button>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Action</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose} post={data} />
    </>
  );
};

export default Tables;
