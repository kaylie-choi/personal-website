import React from 'react'
import styled from 'styled-components'
import Stitch from '../../assets/no-girlbossing.jpeg'
import { useKonamiCode } from '../hooks/useKonamiCode'


const SecretModal = styled.div`
    display: none;
    position: fixed;
    z-index: 99;
    padding-top: 70px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
`
const SecretImg = styled.img`
    margin: auto;
    display: block;
    height: 80vh;
    border-radius: 5px;

    @media only screen and (max-width: 700px) {
        width: 80%;
        height: auto;
    }
`
const SecretMsg = styled.div`
    margin: auto;
    display: block;
    width: 80%;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
`
const ModalClose = styled.span`
    position: absolute;
    top: 15px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    transition: 0.3s;

    :hover {
        color: #bbb;
        text-decoration: none;
        cursor: pointer;
    }
`

export default function Surprise() {
    const konami = useKonamiCode();

    return (
        <div>
            <SecretModal id="secretModal" style={{ display: konami ? 'block' : 'none' }}>
                <ModalClose 
                    onClick={() => {
                        document.getElementById("secretModal").style.display = "none";
                    }}
                >
                    &times;
                </ModalClose>
                <SecretImg 
                    id="modalImg"
                    src={Stitch}>
                </SecretImg>
                <SecretMsg id="secretMsg">you're welcome :))</SecretMsg>
            </SecretModal>
        </div>
    )
}