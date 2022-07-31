import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

async function getAll() {
  const response = await axios.get(baseUrl);
  return response.data;
}

async function create(content) {
  const object = { content, important: false };
  const response = await axios.post(baseUrl, object);
  return response.data;
}

const exportObj = {
  getAll,
  create,
};

export default exportObj;
