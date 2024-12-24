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
        <form action="">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name='title' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name='description' id="description" className="form-control" ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image (poster)</label>
            <input type="file" name='poster' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input type="file" name='video' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories :</label>
            <select name="categories" id="categories" className="form-control">
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
          <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="isAvailable" defaultChecked />
              <label htmlFor="isAvailable">Is Avaible</label>
          </div>
        </form>
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