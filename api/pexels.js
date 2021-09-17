// API KEY : 563492ad6f91700001000001ca4f4d1ed5eb4698bcacedbe258388c2
/*
curl -H "Authorization: 563492ad6f91700001000001ca4f4d1ed5eb4698bcacedbe258388c2" \
  "https://api.pexels.com/v1/search?query=people"
*/

import axios from 'axios';

export const getImagesAsync = async (query = 'programming') => {
  return await axios.get(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: '563492ad6f91700001000001ca4f4d1ed5eb4698bcacedbe258388c2',
    },
  });
};
