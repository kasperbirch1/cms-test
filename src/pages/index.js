import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '../components/page-elements'
import Image from '../components/image'
import SEO from '../components/seo'
import IntersectionObserverAnimation from '../components/Animations/IntersectionObserverAnimation'

const IndexPage = () => {
  const Customvariants1 = {
    hidden: {
      x: 500,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1
    }
  };
  const Customvariants2 = {
    hidden: {
      fontSize: "1rem",
    },
    show: {
      fontSize: "3rem",
    }
  };
  return (
    <>
      <SEO title="Home" />
      <Wrapper>
        <h1>Welcome to your new Gatsby site.</h1>

        <div style={{ height: '150vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants1} triggerOnce={true} >
          <span>section 1</span>
        </IntersectionObserverAnimation>

        <div style={{ height: '50vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants2} >
          <span>section 2</span>
        </IntersectionObserverAnimation>

        <div style={{ height: '50vh', outline: '1px dotted red' }}></div>
        <IntersectionObserverAnimation rootMarginBotton="-100px" Customvariants={Customvariants1} triggerOnce={true} >
          <span>section 3</span>
          <Image />
          <p>Now go build something great.</p>
        </IntersectionObserverAnimation>
        <Link to="/page-2/">Go to page 2</Link>
      </Wrapper>
    </>
  )
}

export default IndexPage
