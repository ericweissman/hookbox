import React, { useState } from 'react';

const Form = ({addIdea}) => {
  const [info, setInfo] = useState({
    title: '',
    description: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setInfo({
      ...info,
      [name]: value
    })
  }

  const handleClick = event => {
    event.preventDefault();
    addIdea({...info, id: Date.now()})
  }

  return (
    <form>
      <input
        type='text'
        name='title'
        onChange={handleChange}
        value={info.title}
        placeholder='Add title'/>
      <input
        type='text'
        name='description'
        value={info.description}
        onChange={handleChange}
        placeholder='Add description'/>
      <input
        onClick={handleClick}
        type='submit'
        value='Add Idea'/>
    </form>
  )
}

export default Form;
