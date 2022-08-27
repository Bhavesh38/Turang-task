import React from 'react';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import "./Card.css"

function Card({ image, name, specification, rating, details = { details } }) {
  return (
    <div className='card'>
      <img src={image} />
      <div className='card_header'>
        <h3>{name}</h3>
        <p>{specification}</p>
        <p>{rating} ⭐⭐⭐⭐</p>
        <p>{details}</p>
      </div>
      <div className='card_details'>
        <div className='card_detailsContent'>
          <BusinessCenterIcon />
          <h5>Projects</h5>
          <p>90+</p>
        </div>
        <div className='card_detailsContent'>
          <AssignmentIndIcon />
          <h5>Clients</h5>
          <p>100+</p>
        </div>
        <div className='card_detailsContent'>
          <AssignmentIndIcon />
          <h5>Clients</h5>
          <p>100+</p>
        </div>
      </div>
    </div>
  )
}

export default Card
