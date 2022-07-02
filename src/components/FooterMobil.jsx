import React from 'react'
import styled from "styled-components";
import LOGOFOOTER from '../img/logo_white.png'
import Logo1 from '../img/Footer/logoDirectTv.png'
import Logo2 from '../img/Footer/LogoSky.png'
import Logo3 from '../img/Footer/it&t.png'


const FooterStyled = styled.div`
    background-color: #000912;
    padding: 40px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `

const ImgLogo = styled.img`
    width: 150px;
    `

const Text = styled.p`
    font-family: 'Montserrat', sans-serif !important;

    &:hover {
        color: #80734d !important;
    }
`

const ImgDirectTv = styled.img`
    height: 23px;
    filter: opacity(0.4);
    margin-top: 4px;
    `
const ImgSky = styled.img`
    height: 30px;
    filter: opacity(0.4);
    `
const AtYT = styled.img`
    height: 30px;
    filter: opacity(0.4);
    `
const Credits = styled.p`
    color: #666b71;
    margin-top: 40px;
    font-family: 'Montserrat', sans-serif !important;
    `



const FooterMobil = () => {
  return (
    <div>
        <FooterStyled>
            <ImgLogo src={LOGOFOOTER} alt="" />
            <Text className='text-white mt-4 mb-0'>Ligia Leon, Area Manager</Text>
            <Text className='text-white'>Lleon@directv.com</Text>

            <a href="/" className='text-decoration-none'><Text className='text-white mt-4 mb-0'>Calendario</Text></a>
            <a href="/" className='text-decoration-none'><Text className='text-white mb-0'>Socios</Text></a>
            <a href="/" className='text-decoration-none'><Text className='text-white'>Univesidades</Text></a>

            <div className='d-flex gap-4 pt-5'>
                <a href="/"><ImgDirectTv src={Logo1} alt="Logo Directv" /></a>
                <a href="/"><ImgSky src={Logo2} alt="Logo Sky" /></a>
                <a href="/"><AtYT src={Logo3} alt="Logo AT AND T" /></a>
            </div>
            <div className='d-flex gap-4 pt-4'>
                <ImgDirectTv src={Logo1} alt="Logo Directv" />
                <ImgSky src={Logo2} alt="Logo Sky" />
            </div>

            <Credits>2018 - FACIUNI is a program by DIRECTVCINEMA+</Credits>

        </FooterStyled>
    </div>
  )
}

export default FooterMobil
