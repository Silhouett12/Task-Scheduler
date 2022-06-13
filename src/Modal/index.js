
import ReactDOM from 'react-dom';
import "./Modal.css"
import React from 'react';

const Modal = ({children}) => {
        return ReactDOM.createPortal(

        <div className='Modal'>{children}</div>,
         
          document.getElementById('modal')
        )
      }

export {Modal};