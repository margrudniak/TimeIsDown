import {TimerObjectType} from 'src/types';

export interface ModalProps {
  dataModal: Pick<TimerObjectType, 'id' | 'title'> | {};
  isVisible: boolean;
  closeModal: () => void;
}
