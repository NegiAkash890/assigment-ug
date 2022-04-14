import React, { useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/actions/movieActions';

function Header() {
  const dispatch = useDispatch();
  const query = useRef('anime');
  const handleClick = (type) => {
    if (type === 'find') {
      dispatch(fetchMovies(query.current.value));
    } else {
      query.current.value = ' ';
    }
  };
  return (
    <Flex
      bg="white"
      position="fixed"
      zIndex={100}
      gap={2}
      alignItems="flex-end"
      shadow="lg"
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
          <Input type="search" minW="400px" ref={query} />
        </FormControl>
      </Box>
      <Flex>
        <Button
          mr={1}
          bg="red.500"
          color="white"
          onClick={() => handleClick('find')}
        >
          Find
        </Button>
        <Button bg="red.500" color="white" onClick={() => handleClick('reset')}>
          Reset
        </Button>
      </Flex>
    </Flex>
  );
}

export default Header;
