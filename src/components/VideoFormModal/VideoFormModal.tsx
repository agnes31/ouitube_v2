
import React, { FC, useEffect,useState } from 'react';
// import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';
import { Video } from '../../models/Video';


interface VideoFormModalProps {
  hideModal: ()=>void
}


const VideoFormModal: FC<VideoFormModalProps> = ({hideModal}) => {

  const [formData, setFormData] = useState<Video>({ 
    title: '',
    description: '',
    poster: null as File | null,
    link: null as File | null,
    category: '',
    isAvailable: true
  })

  const [formErrors, setFormErrors] = useState<Record<string,string>>({}) 

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
  const validateForm = (): boolean => { 
    const errors: Record<string, string> = {}; 
    if(!formData.title.trim()){
      errors.title = 'Title is required';
    }
    
    if(!formData.description.trim()){
      errors.description = 'Description is required';
    }
    if(!formData.poster){
      errors.poster = 'Poster file is required';
    }
    if(!formData.link){
      errors.link = 'Video file is required';
    }
    if(!formData.category.trim()){
      errors.category = 'Category is required';
    }
    setFormErrors(errors); 
 return Object.keys(errors).length === 0;    

  }
  const handleSubmit = (event: any) => {
    event.preventDefault(); 
    if(!validateForm()){ 
      return;
    }
    console.log(formData);
  }


  return (
    <div className='VideoFormModal'>
    <Modal show={true} scrollable size='lg'>
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
            className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
            onChange={handleInputChange}
             />
            {formErrors.title && <div className='invalid-feedback'>{formErrors.title}</div>} 
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea name='description' 
            defaultValue={formData.description}
            id="description" 
            className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
            onChange={handleInputChange} 
            >
            </textarea>
            {formErrors.description && <div className='invalid-feedback'>{formErrors.description}</  div>}
          </div>
          <div className="form-group">
            <label htmlFor="image">Image (poster)</label>
            <input type="file" 
            name='poster' 
            className={`form-control ${formErrors.poster ? 'is-invalid' : ''}`}
            onChange={handleInputChange} 
            />
            {formErrors.poster && <div className='invalid-feedback'>{formErrors.poster}</  div>}
          </div>      
          <div className="form-group">
            <label htmlFor="video">Video</label>
            <input type="file" 
            name='link' 
            className={`form-control ${formErrors.link ? 'is-invalid' : ''}`}
            onChange={handleInputChange} 
            />
            {formErrors.link && <div className='invalid-feedback'>{formErrors.link}</  div>}
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories :</label>
            <select name="category" 
            id="categories" 
            defaultValue={formData.category}
            className={`form-control ${formErrors.category ? 'is-invalid' : ''}`}
            onChange={handleInputChange}
            >
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
            </select>
               {formErrors.category && <div className='invalid-feedback'>{formErrors.category}</  div>}
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
        <Button variant="success"  onClick={handleSubmit}>
          Save Video
        </Button>
      </Modal.Footer>
    </Modal>

  </div>

    
  );
}

export default VideoFormModal;