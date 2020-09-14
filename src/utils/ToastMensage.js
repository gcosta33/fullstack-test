import {Toast} from 'react-bootstrap'


import React from 'react';

export default function ToastMensage(props) {

  return (
        <div
        style={{
        position: 'absolute',
        top: 0,
        right: 0,
        }}
>
        <Toast onClose={() => props?.setShow(false)} show={props?.showToast} delay={1000} autohide>
          <Toast.Header>
            <strong className="mr-auto">{props?._method}</strong>
             <small>Agora</small>
          </Toast.Header>
          <Toast.Body>{props?.message}!</Toast.Body>
        </Toast>
       
      </div>
  )
}
