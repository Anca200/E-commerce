import React from 'react';
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
          <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
          </div>
          <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eum unde eius dolor sapiente dolores itaque nam quibusdam culpa voluptates mollitia repudiandae assumenda nesciunt et nulla consequatur perferendis, facere repellendus.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dolores quidem officia, corporis provident veniam quis quod animi ea, ducimus iure expedita, facilis soluta? Nobis, at! Autem unde natus expedita!</p>
          </div>
    </div>
  )
}

export default DescriptionBox