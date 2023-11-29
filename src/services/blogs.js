import axios from 'axios';
const baseUrl = '/api/blogs'; // Adjust this if your API endpoint differs

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  console.log('Attempting to create blog with data:', newObject);
  const request = axios.post(baseUrl, newObject);
  return request.then(response => {
    console.log('Blog created successfully:', response.data);
    return response.data;
  }).catch(error => {
    console.error('Error in blog creation:', error.response.data);
    throw error;
  });
};

/*
const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};
*/
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

export default { getAll, create, update };