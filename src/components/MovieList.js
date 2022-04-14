import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { deleteMovieById, fetchMovieById } from '../redux/actions/movieActions';
import UpdateModal from './UpdateModal';
import InfoModal from './InfoModal';

function MovieList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.movies.filteredMovies);
  const [modalView, setModalView] = useState([false, false]);
  const [movieId, setMovieId] = useState(null);

  const updateView = (value, i) => {
    const modalState = [...modalView];
    modalState[i] = value;
    setModalView(modalState);
  };
  const handleClick = (e) => {
    if (e.target.nodeName === 'BUTTON') {
      if (e.target.dataset.action === 'delete') {
        dispatch(deleteMovieById(e.target.dataset.imdbid));
      } else if (e.target.dataset.action === 'edit') {
        setMovieId(e.target.dataset.imdbid);
        updateView(true, 0);
      } else if (e.target.dataset.action === 'details') {
        dispatch(fetchMovieById(e.target.dataset.imdbid));
        updateView(true, 1);
      }
    }
  };
  return (
    <Box display="flex" flexDirection="column" minW="400px" p={10}>
      <UpdateModal
        mt={10}
        view={modalView[0]}
        updateView={updateView}
        movieId={movieId}
      />
      <InfoModal mt={10} view={modalView[1]} updateView={updateView} />
      <Flex justifyContent="space-between" m={3} mt={10}>
        <Heading size="md" mt={10}>
          Movie List
        </Heading>
        <Text mt={10}>Showing 0 of {items.length} results</Text>
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
                    gap={1}
                    leftIcon={<FiEye />}
                    fontWeight="light"
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'blue'
                    }}
                  >
                    Details
                  </Button>
                  <Button
                    d="flex"
                    variant="unstyled"
                    data-imdbid={movie.imdbID}
                    alignItems="center"
                    fontSize="xs"
                    fontWeight="light"
                    data-action="delete"
                    gap={1}
                    size="xs"
                    leftIcon={<FiTrash />}
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'red'
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    d="flex"
                    variant="unstyled"
                    data-imdbid={movie.imdbID}
                    alignItems="center"
                    fontSize="xs"
                    fontWeight="light"
                    data-action="edit"
                    gap={1}
                    leftIcon={<BsPencilSquare />}
                    size="xs"
                    _hover={{
                      cursor: 'Pointer',
                      textDecoration: 'underline',
                      color: 'red'
                    }}
                  >
                    Edit
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
