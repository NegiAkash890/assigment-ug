import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';

function Header() {
  return (
    <Flex
      gap={2}
      alignItems="flex-end"
      shadow="lg"
      my={4}
      rounded="md"
      w="100%"
      display="flex"
      justifyContent="center"
      p={2}
      pb={6}
    >
      <Box>
        <FormControl>
          <FormLabel>Enter title</FormLabel>
          <Input type="text" minW="400px" />
        </FormControl>
      </Box>
      <Flex>
        <Button mr={1} bg="red.500" color="white">
          Find
        </Button>
        <Button bg="red.500" color="white">
          Reset
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
