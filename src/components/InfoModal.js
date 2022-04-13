import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function InfoModal({ view, updateView }) {
  const movie = useSelector((state) => state.movies.selectedMovie);
  return (
    <Modal onClose={() => updateView(false)} isOpen={view} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Movie Info</ModalHeader>
        <ModalBody>
          <Text>{movie?.Title}</Text>
          <Text>{movie?.RunTime}</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="red.500"
            w="100%"
            color="white"
            onClick={() => updateView(false)}
          >
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
