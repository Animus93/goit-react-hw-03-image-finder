import axios from 'axios';

const apiKey = '30998519-890b863bc5c0662feb8bb0828';


export const fetchImages = (page=1, valueToSerch) => {
  return axios.get(
    `https://pixabay.com/api/?q=${valueToSerch}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
   return response.data.hits
  });
};

// export default {fetchImages}