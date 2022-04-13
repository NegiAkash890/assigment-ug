import React from 'react';
import { FiTrash, FiEye } from 'react-icons/fi';
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
  Text
} from '@chakra-ui/react';

function MovieList() {
  return (
    <Box display="flex" flexDirection="column" minW="400px" p={3}>
      <Flex justifyContent="space-between" m={3}>
        <Heading size="md">Movie List</Heading>
        <Text>Showing 0 of 0 results</Text>
      </Flex>
      <TableContainer shadow="lg" rounded="md">
        <Table size="sm" variant="simple">
          <Thead>
            <Tr>
              <Th>Movie Title</Th>
              <Th>Movie Poster</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Moive</Td>
              <Td>millimetres (mm)</Td>
              <Td d="flex">
                <Text mr={4}>
                  <FiTrash />
                </Text>
                <Text>
                  <FiEye />
                </Text>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MovieList;
