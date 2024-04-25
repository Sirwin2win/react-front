import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCategoryPage = ({AddCategorySubmit}) => {

    const [name, setName] = useState('');
    const navigate = useNavigate();
 
    const submitForm = (e =>{
      e.preventDefault();
      const newCategory = {
        name,
      };
      AddCategorySubmit(newCategory);
      return navigate('/category-listing');
    })
  return (
    <div className='container'>
      <h3>Add Category</h3>
      <form onSubmit={submitForm}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
  </div>
  <input type="submit" className="btn btn-primary" />
</form>
    </div>
  )
}

export default AddCategoryPage
