import React from 'react'
import styled from 'styled-components'
import Form from './Form'
import book from '../assets/book.png'

const SectionTwo = () => {
    return (
        <StyledTwo>
            
            <div className="contain">
                <h1>
                        If you act upon the knowledge in this book consistently over the next 3 - 6 months, 
                        you will become more valuable with your skills, fast track your career growth in tech, 
                        earn as much money as you want and enjoy the freedom and fulfillment to do more good to 
                        yourself and others.
                </h1>
            </div>

            <div className="container">
                <div className="left">
                        <h1>
                             What you will learn from "The Blood Money in Tech"
                        </h1>

                    
                        <ul>
                            <li><span id='color'>The tech industry; what you need to know as a newbie</span></li>
                            <li><span id='color'>Why you need to invest yourself into tech immediately</span></li>
                            <li><span id='color'>The biggest opportunity in the tech industry today and how to take advantage of it</span></li>
                            <li><span id='color'>The 7 MOST IMPORTANT insights you need to thrive in the tech industry</span></li>
                            <li><span id='color'>The common challenges you will most likely face and how to deal with it</span></li>
                        </ul>
                    

                    
                        <h1>Extra benefits of getting "The Blood Money in Tech"</h1>
                    

                    <div className="list">
                        <ul>
                            <li><span id='color'>A free 15 mins consultation call with the author Olabanji Ewenla regarding anything you'd like to find out about the tech industry</span></li><br /><br />
                            <li><span id='color'>20% discount off the tuition fee for UIUX design training at Perxels Design School</span></li>
                            <li><span id='color'>20% discount off the tuition fee for Product Management training at Enoverlab</span></li>
                            <li><span id='color'>Direct link to an in-depth course on how to make money online as a freelancer</span></li>
                            <li><span id='color'>Direct link to a detailed course on how to get good-paying remote jobs from Nigeria</span></li>
                            <li><span id='color'>Direct link to get the most demanded course on Affiliate Marketing - 72IG course</span></li>
                        </ul>
                    </div>

                    <div className="last">
                        <h3><strong>You will receive the following benefits in your email after the purchase of the book.</strong></h3>
                    </div>

                </div>

                <div className="right">
                    <div className="launch">
                        <h1>BOOK IS LAUNCHING <br /><span className='date'>20TH NOVEMBER, 2021</span></h1>
                    </div>
                    <Form />
                    

                    <div className="book">
                        <img src={book} alt="" />
                    </div>

                </div>
            </div>
            
        </StyledTwo>
    )
}

export default SectionTwo
const StyledTwo = styled.section`
max-width:100%;
.contain{
    @media screen and (max-width: 320px) {
        max-width:80%;
        margin:auto;

        h1{
            padding-top:40%;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 1em;
            line-height: 1.7rem;
            color: #CD2A44;
            padding-bottom:12%;
        }
    }
    @media screen and (min-width:321px) and (max-width:480px) {
        max-width:80%;
        margin:auto;

        h1{
            padding-top:20%;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 1em;
            line-height: 1.7rem;
            color: #CD2A44;
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        max-width:80%;
        margin:auto;

        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 1em;
            line-height: 1.7rem;
            color: #CD2A44;
        }
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        max-width:90%;
        margin:auto;

        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 1.3125em;
            line-height: 2.7rem;
            color: #CD2A44;
        }
    }

    @media screen and (min-width: 1024px) {
        max-width:90%;
        margin:auto;

        h1{
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 2.7rem;
            color: #CD2A44;
        }
    }
}
.container{
    @media screen and (max-width: 320px) {
        max-width:100%;
    }

    @media screen and (min-width:321px) and (max-width:480px) {
        max-width:100%;
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        max-width:100%;
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        max-width:100%;
        display:flex;
    }

    @media screen and (min-width: 1024px) {
        max-width:100%;
        display:flex;
    }
    .left{
        @media screen and (max-width: 320px) {
            max-width:100%;
            margin:auto;
        }

        @media screen and (min-width:321px) and (max-width:480px) {
            max-width:100%;
            margin:auto;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            max-width:100%;
            margin:auto;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            max-width:100%;
            margin:auto;
        }

        @media screen and (min-width: 1024px) {
            max-width:100%;
            margin:auto;
        }

        h1{
            @media screen and (max-width: 320px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 1em;
                line-height: 123.5%;
                width:15rem;
                padding-left:9%;
                // display:none;
            }

            @media screen and (min-width:321px) and (max-width:480px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 1.5em;
                line-height: 123.5%;
                width:22rem;
                padding-left:4%;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 1.5em;
                line-height: 123.5%;
                width:22rem;
                padding-left:4%;
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 1.5em;
                line-height: 123.5%;
                width:22rem;
                padding-left:4%;
            }

            @media screen and (min-width: 1024px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 123.5%;
                width:27.875rem;
                padding-left:8%;
            }
        }

        ul{
            @media screen and (max-width: 320px) {
                max-width:80%;
                margin:auto;
            }

            @media screen and (min-width:321px) and (max-width:480px) {
                max-width:80%;
                margin:auto;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                max-width:80%;
                margin:auto;
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                max-width:80%;
                margin:auto; 
            }

            @media screen and (min-width: 1024px) {
                max-width:80%;
                margin:auto; 
            }
            li{
                color:red;
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 17px;
                line-height: 140%;
                padding-right:.5rem;
                padding-top:.5rem;
                #color{
                    color: #524C4C;
                }
                @media screen and (max-width: 480px) {
                    margin-left:-5%;
                }

                @media screen and (min-width:481px) and (max-width:768px) {
                    margin-left:-5%;
                }

                @media screen and (min-width:769px) and (max-width:1023px) {
                    margin-left:-5%;
                }

                @media screen and (min-width: 1024px) {
                    margin-left:0%;
                    font-size: 18px;
                }
            }
        }

        .last{
            @media screen and (max-width: 320px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                margin-left:2%;
                line-height: 150%;
                color: #524C4C;
                width:16.59rem;
            }

            @media screen and (min-width:321px) and (max-width:480px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                margin-left:2%;
                line-height: 150%;
                color: #524C4C;
                width:22.59rem;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                margin-left:4%;
                line-height: 150%;
                color: #524C4C;
                width:42.59rem;
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 14px;
                margin-left:2%;
                line-height: 150%;
                color: #524C4C;
                width:22.59rem;
            }

            @media screen and (min-width: 1024px) {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 800;
                font-size: 16px;
                margin-left:8%;
                line-height: 150%;
                color: #524C4C;
                width:80%;
            }
        }
    }

    //right div
    .right{
        @media screen and (max-width: 320px) {}

        @media screen and (min-width:321px) and (max-width:480px) {
            max-width:100%;
            height:auto;
            position:relative;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            max-width:100%;
            height:auto;
            position:relative;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            min-width:50%;
            height:auto;
            position:relative;
        }

        @media screen and (min-width: 1024px) {
            min-width:50%;
            height:auto;
            position:relative;
        }
        .launch{
            @media screen and (max-width: 320px) {
                h1{
                    padding-top:5%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 123.5%;
                    text-align: center;
                    color: #0A122A;

                    .date{
                        color:#f58598;
                    }

                }
            }

            @media screen and (min-width:321px) and (max-width:480px) {
                h1{
                    padding-top:5%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 123.5%;
                    text-align: center;
                    color: #0A122A;

                    .date{
                        color:#f58598;
                    }

                }
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                h1{
                    padding-top:5%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 123.5%;
                    text-align: center;
                    color: #0A122A;

                    .date{
                        color:#f58598;
                    }

                }
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                h1{
                    padding-top:5%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 1.2em;
                    line-height: 123.5%;
                    text-align: center;
                    color: #0A122A;

                    .date{
                        color:#f58598;
                    }

                }
            }

            @media screen and (min-width: 1024px) {
                h1{
                    padding-top:5%;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 37px;
                    line-height: 123.5%;
                    text-align: center;
                    color: #0A122A;

                    .date{
                        color:#f58598;
                    }

                }
            }
        }

        .book{
            @media screen and (max-width: 320px) {
                max-width:80%;
                margin-left:10%;
                margin-top:-30%;
                postion:absolute;

                img{
                    width:100%;
                    height:100%;
                }
            }

            @media screen and (min-width:321px) and (max-width:480px) {
                max-width:80%;
                margin-left:10%;
                margin-top:-30%;
                postion:absolute;

                img{
                    width:100%;
                    height:100%;
                }
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                max-width:40%;
                margin-left:30%;
                margin-top:-10%;
                postion:absolute;

                img{
                    width:100%;
                    height:100%;
                }
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                max-width:20%;
                margin-left:30%;
                margin-top:-10%;
                postion:absolute;
                display:none;

                img{
                    width:100%;
                    height:100%;
                }
            }

            @media screen and (min-width:1024px) {
                max-width:20%;
                margin-left:30%;
                margin-top:-10%;
                postion:absolute;
                display:none;

                img{
                    width:100%;
                    height:100%;
                }
            }
        }
    }

}

`