import React, { useState } from 'react';
import { FiTrash, FiEye } from 'react-icons/fi';
import { BsPencilSquare } from 'react-icons/bs';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
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
import {
  deleteMovieById,
  fetchMovieById,
  sortMoviesByTitle
} from '../redux/actions/movieActions';
import UpdateModal from './UpdateModal';
import InfoModal from './InfoModal';

function MovieList() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState(false);
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

  const sortMovies = () => {
    if (order === false) {
      dispatch(sortMoviesByTitle('ASCEND'));
    } else {
      dispatch(sortMoviesByTitle('DESCEND'));
    }
    setOrder((currentOrder) => !currentOrder);
  };
  return (
    <Box display="flex" flexDirection="column" p={10} pt="100px">
      <UpdateModal
        mt={10}
        view={modalView[0]}
        updateView={updateView}
        movieId={movieId}
      />
      <InfoModal mt={10} view={modalView[1]} updateView={updateView} />
      <Button
        mt="10"
        w="150px"
        onClick={sortMovies}
        bg="red.500"
        color="white"
        gap={2}
      >
        Sort {order === false ? <HiSortAscending /> : <HiSortDescending />}
      </Button>
      <Flex m={3} mt={5}>
        <Heading size="md" mt={10}>
          Searched Results
        </Heading>
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
                    src={
                      movie.Poster !== 'N/A'
                        ? movie.Poster
                        : 'https://via.placeholder.com/150 '
                    }
                    fallbackSrc="https://via.placeholder.com/150"
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
      <Text textAlign="center" mt={2}>
        {items?.length === 0 ? 'No Result Found' : ' '}
      </Text>
    </Box>
  );
}

export default MovieList;
