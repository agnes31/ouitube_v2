/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 17:17:14
*/
import React, { FC, useEffect,useState } from 'react';
// import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';
import { Video } from '../../models/Video';


interface VideoFormModalProps {
  hideModal: ()=>void
}


const VideoFormModal: FC<VideoFormModalProps> = ({hideModal}) => {

  const [formData, setFormData] = useState<Video>({ // vient de Models/Video
    title: '',
    description: '',
    poster: null as File | null,
    link: null as File | null,
    category: '',
    isAvailable: true
  })



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  const handleInputChange = (event: any ) => {
    const {name, value, type,files, checked} = event.target;

    const newValue: any = formData
    if(type === "checkbox"){ 
      newValue[name] = checked;
    }else if(type === "file"){
      newValue[name] = files[0];
    }
    else{
      newValue[name] = value;
    }
    setFormData(newValue);
    console.log(formData);

    // setFormData({
    //   ...formData,
    //   [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value,
    // });
  
  }

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
            <input 
            defaultValue={formData.title} 
            type="text" 
            name='title' 
            className="form-control"
            onChange={handleInputChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name='description' 
            defaultValue={formData.description}
            id="description" 
            className="form-control"
            onChange={handleInputChange} 
            >

            </textarea>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image (poster)</label>
            <input type="file" 
            name='poster' 
            className="form-control"
            onChange={handleInputChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input type="file" 
            name='link' 
            className="form-control"
            onChange={handleInputChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories :</label>
            <select name="category" 
            id="categories" 
            className="form-control"
            defaultValue={formData.category}
            onChange={handleInputChange}
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
          </div>
          <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" 
              id="isAvailable"
              name='isAvailable'
              defaultChecked={formData.isAvailable}// ouvert par default
              // defaultChecked 
              onChange={handleInputChange} 
              // defaultChecked 
              />
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