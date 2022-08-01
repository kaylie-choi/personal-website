import React from 'react'
import styled from 'styled-components'
import tw from "twin.macro"



const ContactWrapper = styled.div`
  padding: 1rem 0 6rem;
`
const ContactForm = styled.form`
  ${tw`grid grid-cols-1 md:grid-cols-2`}    
`
const ContactLeftWrapper = styled.div`
  width: 100%;
`
const ContactRightWrapper = styled.div`
  width: 100%;
`
const FormPair = styled.span`
  width: 100%;
`
const FormLabel = styled.label`
  font-weight: 600; 
  margin: 0 0 10px;
`
const FormInput = styled.input`
  border: 2px solid #97B08D;
  border-radius: 4px;
  background-color: rgba(99, 99, 99, 0);
  width: 27vw;
  height: 2rem;
  margin-bottom: 1rem; 
  padding-left: 10px;
  
  @media screen and (max-width: 767px) {
    width: 75vw;  
  }
  
  ::placeholder {
    color: #97B08D;
  }
`
const FormText = styled.textarea`
  border: 2px solid #97B08D;
  border-radius: 4px;
  background-color: rgba(99, 99, 99, 0);
  width: 27vw;
  height: 103px;
  margin-bottom: 1rem; 
  padding: 4px 10px 0;

  @media screen and (max-width: 767px) {
    width: 75vw;  
  }

  ::placeholder {
    color: #97B08D;
  }
`

const ContactSubmit = styled.button`
  background-color: #97B08D;
  border: 2px solid #97B08D;
  border-radius: 4px;
  color: #fff;
  padding: 5px 0;
  text-align: center;
  display: inline-block;
  width: 55px;
  ${tw`inline-block flex flex-col items-center`}
`

export default function Contact() {
    return (
        <ContactWrapper
          data-sal="slide-left"
          data-sal-duration="700"
          data-sal-delay="150"
          data-sal-easing="ease-out-back"
        >
          <ContactForm 
            name="Contact Form" 
            method="POST" 
            data-netlify="true"
          >
            {/* action="/" */}
            <input type="hidden" name="form-name" value="Contact Form" />

              <ContactLeftWrapper>

                <FormPair>
                  <FormLabel>Name</FormLabel>
                  <br/>
                  <FormInput type="name" name="name" placeholder='Tim Nook'/>
                </FormPair>

                <br/>

                <FormPair>
                  <FormLabel>Email</FormLabel>
                  <br/>
                  <FormInput type="email" name="email" placeholder='timnook@nookinc.com'/>
                </FormPair>

              </ContactLeftWrapper> 
              
              <ContactRightWrapper>
                <FormPair>
                  <FormLabel>Message</FormLabel>
                  <br/>
                  <FormText name="message" placeholder='I suppose it was a bit more than a nap wasnt it? Its a brand new day!'/>
                </FormPair>
              </ContactRightWrapper>

              <ContactSubmit type="submit">Send</ContactSubmit>

          </ContactForm>
        </ContactWrapper>
    )
}