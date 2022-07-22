import ReactDOM from 'react-dom';

export default function ModalPortals({ children }: any) {
  const modalElement: any = document.querySelector('#modal');
  return ReactDOM.createPortal(children, modalElement);
}
