import React from 'react'

import "./banar.css"

export const Banar = () => {
  return (
    <>
        <section className="banner-area">
            <div className="container">
                <div className="content-area">
                    <h1>Brand New <br /> Group of Architects </h1>
                    <p className="banner-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                    <button className="btn-primary">Explore More</button>
                </div>
                <div className="banner-img">
                    <img src="../../images/banner.png" alt="" />
                </div>
            </div>
        </section>
        
    </>
  )
}
