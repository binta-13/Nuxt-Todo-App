import { Box, Button, Heading, Input, Textarea } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { createPost } from '../pages/api/api';

const CreatePost = () => {
  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  const { mutateAsync } = useMutation(createPost);

  const onSubmit = async (data) => {
    await mutateAsync(data);
  };

  return (
    <Box w='30%' margin={10}>
      <Heading as="h1" size="xl" mb="4">
        Create Post
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Title"
          {...register('title', { required: true })}
          mb="4"
        />
        <Textarea
          placeholder="Body"
          {...register('body', { required: true })}
          mb="4"
        />
        <Button type="submit" isLoading={isSubmitting}>
          Create
        </Button>
      </form>
    </Box>
  );
};

export default CreatePost;
