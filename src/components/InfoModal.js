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
  GridItem,
  Skeleton,
  SkeletonText
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
              {movie?.Poster === undefined ? (
                <Skeleton height="200px">
                  <div>contents wrapped</div>
                  <div>be visible</div>
                </Skeleton>
              ) : (
                <img src={movie?.Poster} alt={movie?.Title} height="200px" />
              )}
            </GridItem>
            <GridItem colSpan={3} fontSize="sm">
              {movie?.Actors !== undefined ? (
                <>
                  <Text>
                    <b>Actors: </b>
                    {movie?.Actors}
                  </Text>
                  <Text>
                    <b>Length:</b> {movie?.Runtime}
                  </Text>
                  <Box>
                    <Text fontWeight="bold">Summary</Text>
                    <Text size="xs">{movie?.Plot}</Text>
                  </Box>
                </>
              ) : (
                <Box padding="6" boxShadow="md" bg="white">
                  <SkeletonText mt="4" noOfLines={4} spacing="6" />
                </Box>
              )}
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
