import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface Props {
  children: ReactNode;
}

export default function ModalPortals({ children }: Props) {
  const modalElement = document.querySelector('#modal') as HTMLElement;
  return ReactDOM.createPortal(children, modalElement);
}
