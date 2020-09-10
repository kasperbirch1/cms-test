import React from 'react'
import { Link } from 'gatsby'
import Image from '../components/image'
import SEO from '../components/seo'
import IntersectionObserverAnimation from '../components/Animations/IntersectionObserverAnimation'
import Bloglist from '../components/BlogList/Bloglist'

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
      <section className="wrapper">
        <h1>Welcome to your new Gatsby site.</h1>
        <Bloglist />
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
      </section>
    </>
  )
}

export default IndexPage
