import React from 'react'
import styled from "styled-components";


import IMGBR1 from '../img/Section2/br1.jpg'

const ImagenStyled = styled.img`
    width: min(100%, 400px);

    `

const Section2 = () => {
  return (
<div className='container-xxl mb-5 pb-3'>
    <div className='row'>
        <div className='col-md-4 d-flex justify-content-center'>
                <ImagenStyled src={IMGBR1} alt="" />
        </div>
        <div className='col-md-8 d-flex flex-column justify-content-center'>
                <h4 className='mt-3 ms-3'>Se o Mundo Girasse ao Contrário</h4>
                <p className='ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, numquam neque? Vitae laborum itaque eaque deleniti ipsum! Ducimus omnis quos quo laborum tenetur unde facilis quam minima illum assumenda. Beatae.</p>
        </div>
    </div>
</div>
  )
}

export default Section2
