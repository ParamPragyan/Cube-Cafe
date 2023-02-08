import React from 'react'

import HeroImage from "../../components/HeroImage/HeroImage";
import bgImage from "../../assets/cheese2.jpg";

import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <div>
      <HeroImage
        bgImage={bgImage}
        heading={["contact ", <span>us</span>]}
        text="Feel free to contact with us"
      />
      <ContactForm />
    </div>
  )
}

export default Contact