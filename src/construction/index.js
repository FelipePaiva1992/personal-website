import React from 'react';
import UnderConstruction from 'react-under-construction';
import 'react-under-construction/build/css/index.css';

const Construction = () => (
  <UnderConstruction
    background={{
      image: 'https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg',
      textColor: '#fff',
      overlay: {
        color: '#000',
        opacity: '.5'
      }
    }}
    description={{
      text: 'My website is under construction. I will be here soon',
      style: {
        maxWidth: '440px',
      }
    }}
    links={[
      {
        url: 'https://www.linkedin.com/in/felipespaiva/',
        image: 'https://image.flaticon.com/icons/svg/174/174857.svg',
      }
    ]}
  />
);

export default Construction;
