import axios from 'axios';

// Define the API URL
const apiUrl = 'https://liturgia.up.railway.app';

// Create a function to fetch the data
const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Falha no download do texto');
    throw error;
  }
};

export default fetchData;