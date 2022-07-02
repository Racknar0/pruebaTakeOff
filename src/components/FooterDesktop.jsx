import React from 'react'
import styled from "styled-components";
import LOGOFOOTER from '../img/logo_white.png'
import Logo1 from '../img/Footer/logoDirectTv.png'
import Logo2 from '../img/Footer/LogoSky.png'
import Logo3 from '../img/Footer/it&t.png'

const FooterStyled = styled.div`
    background-color: #001327;
    padding: 40px 30px;
    display: flex;
    
    `
const ImgLogo = styled.img`
width: 90px;

    @media (min-width: 1200px) {
        width: 170px;
    }

`

const Text = styled.p`
    font-family: 'Montserrat', sans-serif !important;
    font-size: 12px;

    @media (min-width: 1200px) {
        font-size: 14px;
    }

    &:hover {
        color: #80734d !important;
    }
`

const ImgDirectTv = styled.img`
    height: 13px;
    margin: 0px 20px;
    @media (min-width: 1000px) {
        height: 23px;
    }
    `
const ImgSky = styled.img`
height: 24px;
margin: 0px 20px;
@media (min-width: 1000px) {
    height: 34px;
    }
`
const AtYT = styled.img`
    height: 20px;
    margin: 0px 20px;
    @media (min-width: 1000px) {
        height: 30px;
    }
    `


const TextRedes = styled.p`
    font-family: 'Montserrat', sans-serif !important;
    font-size: 12px;

    @media (min-width: 1200px) {
        font-size: 14px;
    }

    &:hover {
        color: #80734d !important;
    }
`


const Credits = styled.p`
    color: #ffffff;
    font-family: 'Montserrat', sans-serif !important;
    font-size: 12px;
    margin: 0;
    `

const FooterDesktop = () => {
  return (

        <FooterStyled>
            <div className='row w-100 justify-content-center'>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <ImgLogo src={LOGOFOOTER} alt="" />
                </div>
                <div className='col-2'>
                    <Text className='text-white mt-4 mb-0'>Ligia Leon, Area Manager</Text>
                    <Text className='text-white'>Lleon@directv.com</Text>
                </div>
                <div className='col-2'>
                    <a href="/" className='text-decoration-none'><Text className='text-white mt-4 mb-0'>Calendario</Text></a>
                    <a href="/" className='text-decoration-none'><Text className='text-white mb-0'>Socios</Text></a>
                    <a href="/" className='text-decoration-none'><Text className='text-white'>Univesidades</Text></a>
                </div>
                <div className='col-2'>
                    
                </div>
                <div className='col-2'>
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-facebook redes"></i>
                        <TextRedes className='text-white ms-3 mb-0'>Facebook</TextRedes>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-twitter redes"></i>
                        <TextRedes className='text-white ms-3 mb-0'>Twitter</TextRedes>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-youtube redes"></i>
                        <TextRedes className='text-white ms-3 mb-0'>Youtube</TextRedes>
                    </div>
                    <div className='d-flex align-items-center'>
                        <i class="bi bi-instagram redes"></i>
                        <TextRedes className='text-white ms-3 mb-0'>Instagram</TextRedes>
                    </div>
                </div>
                <div className='col-12 d-flex mt-5 justify-content-center'>
                    <div className='col-5 d-flex align-items-center'>
                        <Credits>2018 - FACIUNI is a program by DIRECTVCINEMA+</Credits>
                        <ImgDirectTv src={Logo1} alt="Logo Directv" />
                        <ImgSky src={Logo2} alt="Logo Sky" />
                        <a href="/"><AtYT src={Logo3} alt="Logo AT AND T" /></a>
                    </div>
                    <div className='col-5 d-flex justify-content-end align-items-center'>
                            <ImgDirectTv className='mt-2' src={Logo1} alt="Logo Directv" />
                            <ImgSky src={Logo2} alt="Logo Sky" />
                    </div>
                </div>
            </div>

        </FooterStyled>

  )
}

export default FooterDesktop
