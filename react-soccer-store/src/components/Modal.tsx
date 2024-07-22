import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { Dialog } from 'primereact/dialog';

export default function Modal(
    { children, open, onClose,  }: 
    { children: any, open: boolean, onClose: () => void }) {
  const dialog = useRef();



  return (
    <>
        <Dialog>
            
        </Dialog>
    </>
  )
}