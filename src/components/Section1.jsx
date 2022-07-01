import React from 'react'
import styled from "styled-components";



import IMGARG from '../img/Section1/arg.jpg'


const ImagenStyled = styled.img`
    width: 100%;

    `


const Section1 = () => {
  return (
    <div className='container-xxl'>
        <div className='row'>
            <div className='col-md-6 mt-5'>
                    <h2 className='mb-3'>Argentina</h2>
                    <ImagenStyled src={IMGARG} alt="" />
                    <h4 className='mt-3'>Fluir</h4>
                    <p>Director Cristian Orta</p>
            </div>
            <div className='col-md-6'>
                    2
            </div>
        </div>
    </div>
  )
}

export default Section1
