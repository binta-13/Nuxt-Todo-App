import { Box, Flex, Text } from "@chakra-ui/react"



const Navbar = () => {
  return (
    <Flex justify="space-between" align="center" p={4} bg='#23E24D'>
      <Box>
        <Text fontSize="xl" fontWeight="bold" color='white'>Todo-App</Text>
      </Box>
    </Flex>
  );
};

export default Navbar;
