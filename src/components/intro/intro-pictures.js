import React, { Component } from 'react'
import styled from 'styled-components'
import tw from "twin.macro"
import profileQE from '../../assets/profile-qePark.jpeg'
import profileForet from '../../assets/profile-laForet.jpeg'
import profileAstro from '../../assets/profile-astronaut.jpeg'
import profileQueen from '../../assets/profile-queenSt.jpeg'
import profileAllen from '../../assets/profile-allenGardens.jpeg'


const IntroPicContainer = styled.div`
    margin-right: 0;
    ${tw`flex justify-center md:justify-end sm:mr-6`}
`
const Img = styled.img`
  width: 310px;
  height: 310px;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
  object-fit: cover;
  border-radius: 50%;

  :hover {
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' 
    viewport='0 0 100 100' style='font-size:20px;'><text y='50%'>✨</text></svg>")
    16 0, auto;
  }
`

class ProfilePicture extends Component {
    pictures = [profileQE, profileForet, profileAstro, profileQueen, profileAllen];
    constructor(props) {
      super(props);
      let newNum = Math.floor(Math.random() * 5);
      this.state = {
        pictureIndex: newNum,
      };
    }
  
    handleRightClick() {
      if (this.state.pictureIndex === this.pictures.length - 1) {
        this.setState({pictureIndex: 0});
      } else {
        this.setState(state => ({
          pictureIndex: state.pictureIndex + 1
        }));
      }
    }
  
    handleLeftClick() {
      if (this.state.pictureIndex === 0) {
        this.setState({pictureIndex: this.pictures.length - 1});
      } else {
        this.setState(state => ({
          pictureIndex: state.pictureIndex - 1
        }));
      }
    }

    render () {
        return (
          <IntroPicContainer>
            <Img 
                src={this.pictures[this.state.pictureIndex]}
                alt="profile picture"
            />
          </IntroPicContainer>
        )
      }
}

export default ProfilePicture