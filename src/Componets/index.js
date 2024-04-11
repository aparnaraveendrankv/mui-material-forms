import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(formData);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" margin="normal">
          <InputLabel>Gender</InputLabel>
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormExample;
