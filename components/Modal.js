import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

import { Box, Heading, Input, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { updatePost } from '../pages/api/api';


export default function BasicUsage({ isOpen, onOpen, onClose, post }) {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const { mutateAsync } = useMutation(updatePost);

  const onSubmit = async () => {
    const data = {
      body: 'data',
      title: 'data',
    };
    await mutateAsync(post.id, data);
  };

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Input
                placeholder="Title"
                defaultValue={post.title}
                {...register('title', { required: true })}
                mb="4"
              />
              <Textarea
                placeholder="Body"
                defaultValue={post.body}
                {...register('body', { required: true })}
                mb="4"
              />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type="submit" isLoading={isSubmitting}>
                Update
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
