import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovieById } from '../redux/actions/movieActions';

export default function VerticallyCenterModal({ view, updateView, movieId }) {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const title = useRef('');
  const updateMovieTitle = () => {
    const pattern = /^([a-zA-Z0-9]+)$/;
    if (pattern.test(title.current.value)) {
      const data = { movieId, title: title.current.value };
      dispatch(updateMovieById(data));
      setIsError(false);
    } else {
      setIsError(true);
      title.current.value = '';
      return;
    }
    updateView(false);
  };
  return (
    <Modal onClose={() => updateView(false)} isOpen={view} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Update Movie Title</ModalHeader>
        <ModalBody>
          <FormControl isInvalid={isError}>
            <Input type="text" ref={title} />
            {isError === true ? (
              <FormErrorMessage>**Only Alphanumeric allowed</FormErrorMessage>
            ) : (
              ''
            )}
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="red.500"
            w="100%"
            color="white"
            onClick={updateMovieTitle}
          >
            SAVE & UPDATE
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

VerticallyCenterModal.propTypes = {
  view: PropTypes.bool.isRequired,
  updateView: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired
};
