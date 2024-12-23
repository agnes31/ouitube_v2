/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 17:17:14
*/
import React, { FC, useEffect } from 'react';
// import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';


interface VideoFormModalProps {
  hideModal: ()=>void
}


const VideoFormModal: FC<VideoFormModalProps> = ({hideModal}) => {


  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque nesciunt excepturi, illum odio tempore voluptates fugit voluptatibus expedita doloremque incidunt cupiditate beatae optio eligendi quas repellat? Sit nisi animi obcaecati.</p>

  return (
    <div className='VideoFormModal'>
    <Modal show={true} size='lg'>
      <Modal.Header >
        <Modal.Title>
          Video Form
        </Modal.Title>
        <Button className='btn-close' onClick={hideModal}></Button>
      </Modal.Header>
      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="success"  onClick={hideModal}>
          Save Video
        </Button>
      </Modal.Footer>
    </Modal>

  </div>

    
  );
}

export default VideoFormModal;