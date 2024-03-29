
import sequelize from "../../images/StackLogos/sequelize.svg"
import css from "../../images/StackLogos/css.svg"
import express from "../../images/StackLogos/express.svg"
import github from "../../images/StackLogos/github.svg"
import html from "../../images/StackLogos/html.svg"
import js from "../../images/StackLogos/javascript.svg"
import materialui from "../../images/StackLogos/materialui.svg"
import node from "../../images/StackLogos/nodejs.svg"
import react from "../../images/StackLogos/react.svg"
import reduxtoolkit from "../../images/StackLogos/reduxtoolkit.svg"
import sass from "../../images/StackLogos/sass.svg"
import tailwind from "../../images/StackLogos/tailwind.svg"
import { useState } from "react"
import Slider from "react-slick"
import { Trans, useTranslation } from "react-i18next"

let images = [sequelize, css, express, github, html, js, materialui, node, react, reduxtoolkit, sass, tailwind]

function Stack() {

    const [stack] = useState([
        {name:"Sequelize", icon: sequelize},
        {name:"CSS", icon: css},
        {name:"Express", icon: express},
        {name:"GitHub", icon: github},
        {name:"HTML", icon: html},
        {name:"JavaScript", icon: js},
        {name:"Material UI", icon: materialui},
        {name:"Node.js", icon: node},
        {name:"React/React-Native", icon: react},
        {name:"Redux Toolkit", icon: reduxtoolkit},
        {name:"Sass", icon: sass},
        {name:"Tailwind", icon: tailwind},
    ])

    let amount
    
    if(window.innerWidth > 1024) {
        amount = 5 }
    else if(window.innerWidth < 1024 && window.innerWidth > 769) {
        amount = 5 }
    else if(window.innerWidth < 768 && window.innerWidth > 541){
        amount = 4
    }else if(window.innerWidth <= 540){
        amount = 3
    }


    const settings = {
      infinite: true,
      slidesToShow: amount,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 1500,
      arrows: false,
      swipeToSlide: true,
      pauseOnHover: true,
      focusOnSelect: true,
    }

    const [t, i18n] = useTranslation()

    return(
        <div className='stack_container section' id="sectionStack">
            <h2>
                <Trans i18nKey="stacktitle">
                    Mi stack de tecnologías
                </Trans>
            </h2>
            <div className='stack_slidercontainer'>
                <Slider {...settings}>
                    {stack.map((e, i) =>
                        <div className='stack_individual' key={i}>
                            <img src={e.icon} alt={e.name} />
                            <p>{e.name}</p>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default Stack;