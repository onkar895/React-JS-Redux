/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Child from './Child';

const Accordion = () => {
  const [showIndex, setShowIndex] = useState(null);

  const Data = [
    {
      id: 1,
      name: 'Onkar',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia iure magni, harum similique esse nobis consequuntur autem quibusdam nulla ex ducimus cupiditate fugit provident, voluptatem aperiam modi! Eveniet, numquam!',
    },
    {
      id: 2,
      name: 'Rishi',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia iure magni, harum similique esse nobis consequuntur autem quibusdam nulla ex ducimus cupiditate fugit provident, voluptatem aperiam modi! Eveniet, numquam!',
    },
    {
      id: 3,
      name: 'Manish',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia iure magni, harum similique esse nobis consequuntur autem quibusdam nulla ex ducimus cupiditate fugit provident, voluptatem aperiam modi! Eveniet, numquam!',
    },
    {
      id: 4,
      name: 'Harshal',
      info:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia iure magni, harum similique esse nobis consequuntur autem quibusdam nulla ex ducimus cupiditate fugit provident, voluptatem aperiam modi! Eveniet, numquam!',
    },
  ];

  const handleShow = (index) => {
    // Toggle the showData state for the clicked item
    setShowIndex(showIndex === index ? null : index);
  };

  return (
    <div>
      {Data.map((item, index) => (
        <Child
          key={item.id}
          data={item}
          showData={index === showIndex}
          handleShow={() => handleShow(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
