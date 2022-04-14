import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMovie } from '../redux/actions/movieActions';

export default function InfoModal({ view, updateView }) {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.selectedMovie);
  const handleClose = () => {
    updateView(false, 1);
    dispatch(removeSelectedMovie());
  };
  return (
    <Modal onClose={handleClose} isOpen={view} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{movie?.Title}</ModalHeader>
        <ModalBody>
          <Grid templateColumns="repeat(5,1fr);" gap={2}>
            <GridItem colSpan={2}>
              <img src={movie?.Poster} alt={movie?.Title} />
            </GridItem>
            <GridItem colSpan={3} fontSize="sm">
              <Text>Actors: {movie?.Actors}</Text>
              <Text>Length: {movie?.Runtime}</Text>
              <Box>
                <Text size="xs">{movie?.Plot}</Text>
              </Box>
            </GridItem>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button bg="red.500" w="100%" color="white" onClick={handleClose}>
            CLOSE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
InfoModal.propTypes = {
  view: PropTypes.bool.isRequired,
  updateView: PropTypes.func.isRequired
};
