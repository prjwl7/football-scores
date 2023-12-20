import React, { useState } from 'react';
import './addData.css';

const AddData = () => {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    score1: '',
    score2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Optionally, you can reset the form after a successful submission
      setFormData({
        team1: '',
        team2: '',
        score1: '',
        score2: '',
      });

      // Optionally, you can perform additional actions after successful submission
      console.log('Data added successfully!');
    } catch (error) {
      console.error('Error adding data:', error.message);
    }
  };

  return (
    <div className='addDataContainer'>
      <form onSubmit={handleSubmit} className='addDataForm'>
        <div>ADD A MATCH IN THE DATABASE</div>
        <label>
          Team 1:
          <input
            type='text'
            name='team1'
            placeholder='Team1'
            value={formData.team1}
            onChange={handleChange}
          />
        </label>
        <label>
          Team 2:
          <input
            type='text'
            name='team2'
            placeholder='Team2'
            value={formData.team2}
            onChange={handleChange}
          />
        </label>
        <label>
          Score 1:
          <input
            type='number'
            name='score1'
            placeholder='Score1'
            value={formData.score1}
            onChange={handleChange}
          />
        </label>
        <label>
          Score 2:
          <input
            type='number'
            name='score2'
            placeholder='Score2'
            value={formData.score2}
            onChange={handleChange}
          />
        </label>
        <button type='submit' className='submit-button'>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddData;
