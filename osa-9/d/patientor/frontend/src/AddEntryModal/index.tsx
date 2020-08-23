import React from 'react';
import { Modal, Segment } from 'semantic-ui-react';
import AddEntryForm from './AddEntryForm';
import { NewEntry } from '../../../backend/src/types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: NewEntry) => void;
}

const AddEntryModal = ({ modalOpen, onClose, onSubmit }: Props) => (
  <Modal open={modalOpen} onClose={onClose} centered={false} closeIcon>
    <Modal.Header>Add a new Entry</Modal.Header>
    <Modal.Content>
      <AddEntryForm onCancel={onClose} onSubmit={onSubmit} />
    </Modal.Content>
  </Modal>
);

export default AddEntryModal;
