import {useEffect} from 'react'
import logo from "../assets/logo.png"
import shape from '../assets/backgroundshape.png'
import background from '../assets/rec.png'
import book from '../assets/book1.png'
import styled from 'styled-components'
import Aos from 'aos';
import "aos/dist/aos.css"

const SectionOne = () => {
    useEffect(()=>{
        Aos.init({duration : 2000})
    },[])
    return (
        <Styledone>
            <div className="logo">
                <img src={logo} alt="" className='log' />
            </div>

            <div className="shape">
                <img src={shape} alt="" className='redshape' />
            </div>

            <div className="picture">
                <img src={book} alt="" />
            </div>

            <div className="container">
                <div className="left">
                    <h1>
                        Be among the first <span id='red'>500 people</span>  to pre-order this book and get <span id='red'>60% off.</span>
                    </h1>

                    <div className="pay">
                        <p>Pay <span className='Two'>₦2,000</span>  instead of <strike>₦5000</strike> </p>
                    </div>

                    <div class="stage">
                    <button className='box bounce-7'><a href="https://paystack.com/pay/thebloodmoneyintech">Pre-order Now</a> </button>
                    </div>
                </div>
            </div>
        </Styledone>
    )
}

export default SectionOne

const Styledone = styled.section`
background:url(${background}) no-repeat center center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
width:100%;
height:90vh;
margin-bottom:50em
position:relative;



@media (max-width: 768px) {
    height:70vh;
}

@media (max-width: 480px) {
    height:150vh;
}


@media screen and (min-width:769px) and (max-width:1024px) {
    height:100vh;
}


@media screen and (min-width: 1024px){ 
    background:url(${background}) no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width:100%;
    height:130vh;
    // background-color:blue;
}



.shape{
    @media screen and (min-width: 1024px) {
        position:absolute;
        z-index:-10;
        width:50%;
        margin-left:50%;
        margin-top:-10em;
        // background-color:red;

        img{
            height:100%;
            width:100%
        }
    
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        position:absolute;
        z-index:-10;
        width:50%;
        margin-left:50%;
        margin-top:-10em;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        position:absolute;
        z-index:-10;
        width:50%;
        margin-left:50%;
        margin-top:-10em;
        // background-color:red;

        img{
            height:100%;
            width:100%
        }
    }

    @media screen and (max-width: 480px) {
        height:14rem;
        max-width:19rem;
        margin-left:8rem;
        margin-top:-7.5rem;
        // margin-top:15em;

        img{
            height:100%;
            width:100%
        }
    }



    

    


    

    
}

.picture{
    @media screen and (min-width:1024px) {
        position:absolute;
        width:50%;
        margin-left:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
        height:auto;
        margin-top:-9%;
        // background-color:skyblue;

        img{
            height:100%;
            width:100%;
            margin-left:15%;
        }
    }

    
    @media screen and (min-width:769px) and (max-width:1023px) {
        position:absolute;
        width:50%;
        margin-left:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
        height:auto;
        margin-top:-12%;
        // background-color:skyblue;

        img{
            height:100%;
            width:100%;
            margin-left:25%;
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        position:absolute;
        width:50%;
        margin-left:50%;
        display:flex;
        justify-content:center;
        align-items:center;
        overflow:hidden;
        height:auto;
        margin-top:-15%;
        // background-color:skyblue;

        img{
            height:100%;
            width:100%;
            margin-left:25%;
        }
    }

    @media screen and (max-width:480px) {
            position:absolute;
            overflow-x: hidden;
            margin-top:95%;
            img{
                height:200%;
                width:200%;
                margin-left:-50%;
            }
    }


}

.logo{
    @media screen and (min-width: 1024px) {
    margin-left:4%;
    padding-top:2rem;
    height:7.87rem;
    width:5.6rem;
        img{
            height:100%;
            width:100%;
            object-fit:cover;
        }
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        padding-top:.2rem;
        margin-left:4%;
        padding-top:2rem;
        height:7.87rem;
        width:5.6rem;
        img{
            height:100%;
            width:100%;
            object-fit:cover;
        }
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        margin-left:2rem;
        margin-top:.1rem;
        height:7.87rem;
        width:5.6rem;
    }

    @media (max-width: 480px) {
        margin-left:2rem;
        height:98px;
        width:79px;
        padding-top:1rem;

        img{
            height:100%;
            width:100%;
            object-fit:cover;
        }
        
    }


}

.container{
    @media (min-width: 1024px) {
        width:100%;
        // background-color:orange;
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        width:100%;
        // background-color:pink;
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        width:100%;
        // background-color:green;
    }
    
    @media (max-width: 480px) {
        max-width:100%;
        margin-top:-1rem;
        // background-color:tomato;
    }
   

    @media screen and (min-width: 992px){ 
        max-width:100%;
    }


    

    .left{
        // background-color:green;

        h1{
            font-size:35px;
            font-family: 'Montserrat', sans-serif;
            font-weight:800;
            line-height:44.2px;
            color:#282828;
            width:20em;
            margin-left:6.3rem;
            margin-top:10.3rem;

            #red{
                color:rgba(205, 42, 68, 1);
            }

            @media (min-width: 1024px) {
                font-size:35px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:51.2px;
                color:#282828;
                width:20em;
                margin-left:4%;
                margin-top:3%
            }

            @media screen and (min-width:769px) and (max-width:1023px) {
                font-size:30px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:51.2px;
                color:#282828;
                width:20em;
                margin-left:2.3rem;
                margin-top:2%
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:25.2px;
                color:#282828;
                width:20em;
                margin-left:2.3rem;
                margin-top:1%
            }
            

            @media (max-width: 480px) {
                font-size:20px;
                font-family: 'Montserrat', sans-serif;
                font-weight:800;
                line-height:32.4px;
                width:18rem;
                height:auto;
                margin-left:2rem;
                margin-top:0rem;
            }



            

        }

        .pay{
            margin-left:4%;
            max-width:50rem;
            font-family: Montserrat;
            font-style: normal;
            font-weight:500;
            font-size: 30px;
            line-height: 138%;
            color: black;
            margin-bottom:86px;

            @media screen and (min-width:769px) and (max-width:1023px) {
                margin-left:2.3rem;
                font-size: 22px;
            }

            @media screen and (min-width:481px) and (max-width:768px) {
                margin-left:2.3rem;
                font-size: 18px;
            }

            .Two{
                background-color:#ffe8ec;
                color:rgba(205, 42, 68, 1);
                font-weight:800;
            }
           

            @media (max-width: 480px) {
                margin-left:2rem;
                font-weight: 500;
                font-size: 18px;
                line-height: 35px;
            }
        }

    .stage{
        display: flex;
        height: 220px;
        width: 100%;

        @media screen and (min-width:481px) and (max-width:768px) {
            height: 120px;
        }

        @media (max-width: 320px) {
            height: 120px;
        }

            .box{
                align-self: center;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                transform-origin: bottom;
                height:4.625rem;
                width:19.063rem;
                margin-left:4%;
                margin-top:-8em;
                margin-bottom:2em;
                border-radius:5px;
                border:none;
                background-color:rgba(205, 42, 68, 1);
                font-size:20px;
                line-height:21.2px;
                font-family: 'Montserrat', sans-serif;
                font-weight:600;
                // cursor:pointer;

                a{
                    color:rgba(255, 255, 255, 1);
                    text-decoration:none;
                }

                @media screen and (min-width:769px) and (max-width:1023px) {
                    margin-left:2.3rem;
                    height:4.25rem;
                    width:17.063rem;
                }

                @media screen and (min-width:481px) and (max-width:768px) {
                    margin-left:2.3rem;
                    height:2.5em;
                    width:12.063rem;
                    margin-top:-10%;
                    font-size:16px;
                }


                @media (max-width: 480px) {
                    max-width:11em;
                    font-size:18px;
                    height:3.5em;
                    margin-left:2rem;
                    margin-top:-12rem;
                    margin-bottom:0em;
                }
                
                
                
            }
            .bounce-7 {
                animation-name: bounce-7;
                animation-timing-function: cubic-bezier(1.280, 1.840, 1.420, 1);

                @keyframes bounce-7 {
                    0%   { transform: scale(1,1)      translateY(0); }
                    10%  { transform: scale(1.1,.9)   translateY(0); }
                    30%  { transform: scale(.9,1.1)   translateY(-10px); }
                    50%  { transform: scale(1.05,.95) translateY(0); }
                    57%  { transform: scale(1,1)      translateY(-7px); }
                    64%  { transform: scale(1,1)      translateY(0); }
                    100% { transform: scale(1,1)      translateY(0); }
                }
            }
        }
        
    .right{
        // background-color:yellow;
    }
}

`

