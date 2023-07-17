import React from 'react'

import "./feature.css"

export const Feature = () => {
  return (
    <>
        <section className="feature-area">
            <div className="container">
                <div className="feature-content">
                    <div className="feature-left">
                    <img src="../../images/team1.png" alt="" />
                    <img src="../../images/team2.png" alt="" />
                    <img src="../../images/team3.png" alt="" />
                     <img src="../../images/team4.png" alt="" />
                    </div>
                    <div className="feature-right">
                        <h2>Quick list <span>of Our</span> <span>Features</span></h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                        <button className="btn-primary">Explore More</button>
                    </div>
                </div>
            </div>
        </section>
        
    </>
  )
}
