import React from 'react';
import { FiTrash, FiEye } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';

import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
  Button
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

function MovieList() {
  const items = useSelector((state) => state.movies.movies);

  const handleClick = (e) => {
    if (e.target.nodeName === 'BUTTON') {
      console.log(e.target.dataset);
    }
  };
  return (
    <Box display="flex" flexDirection="column" minW="400px" p={10}>
      <Flex justifyContent="space-between" m={3} mt={10}>
        <Heading size="md">Movie List</Heading>
        <Text>
          Showing 0 of {items.length}
          results
        </Text>
      </Flex>
      <TableContainer shadow="lg" rounded="md">
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>imdbID</Th>
              <Th>Movie Poster</Th>
              <Th>Movie Title</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items?.map((movie) => (
              <Tr key={movie.imdbID}>
                <Td>{movie.imdbID}</Td>
                <Td>
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    width="50px"
                    height="50px"
                  />
                </Td>
                <Td>{movie.Title}</Td>

                <Td onClick={handleClick}>
                  <Button
                    d="flex"
                    data-imdbid={movie.imdbID}
                    mt={2}
                    size="xs"
                    alignItems="center"
                    data-action="details"
                    fontSize="xs"
                    variant="unstyled"
                    gap={2}
                    fontWeight="light"
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'blue'
                    }}
                  >
                    <FiEye /> Details
                  </Button>
                  <Button
                    d="flex"
                    variant="unstyled"
                    data-imdbid={movie.imdbID}
                    alignItems="center"
                    fontSize="xs"
                    fontWeight="light"
                    data-action="delete"
                    gap={2}
                    size="xs"
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'red'
                    }}
                  >
                    <FiTrash /> Delete
                  </Button>
                  <Button
                    d="flex"
                    variant="unstyled"
                    data-imdbid={movie.imdbID}
                    alignItems="center"
                    fontSize="xs"
                    fontWeight="light"
                    data-action="delete"
                    gap={2}
                    size="xs"
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'red'
                    }}
                  >
                    <BsPencilSquare /> Edit
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MovieList;
