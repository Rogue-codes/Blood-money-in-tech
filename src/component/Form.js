import  { useState } from 'react'
import styled from 'styled-components'

const Form = () => {
    const [modal,setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }
        const [values,setValues] = useState({
        name:"",
        email:"",
        phoneNumber:""
    })

    const { name, email, phoneNumber} = values

    const handleChange = e => {
        setValues({...values, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/roguecodes/google_sheets/xWAjytWgbHDKXWqv?tabId=sheet1',{
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'Application/json'
                    },
                    body: JSON.stringify([[name,email,phoneNumber, new Date().toLocaleString()]])
                }
            )
            await response.json()
            setValues({...values, name:'', email:'', phoneNumber:''})

        } catch (errors) {
            console.log(errors)
        }
    }
   
        




    return (
        
        <StyledForm>
            
            <div className="formcontainer">
                <div className="register"><p>Join the waiting list to be among the first <br /> to be notified when the book launch</p></div>

                <form name='form' onSubmit={handleSubmit} >
                <label htmlFor="" className='Label'>Name</label>
                <input type="text" name='name' className='name' required  value={name} onChange={handleChange}/>

                <label htmlFor="" className='Label'>Email</label>
                <input type="text" name='email' className='name' required value={email} onChange={handleChange}/>

                <label htmlFor="" className='Label'>Phone Number</label>
                <input type="text" name='phoneNumber' className='name' required value={phoneNumber} onChange={handleChange}/>

                <button type='submit' onClick={toggleModal}>Submit</button>

                </form>

                {
                    modal && (
                        <div className="modal">
                                <p>
                                    Your details has been recieved you will get an email from us
                                </p>
                        </div>
                    )
                }
                
            </div>
            
        </StyledForm>
    )
}

export default Form

const StyledForm = styled.div`
.formcontainer{
    @media screen and (max-width: 480px){
        max-width:80%;
        margin:auto;
        background: #CD2A44;
        height: 606px;
    }

    @media screen and (min-width:481px) and (max-width:768px) {
        max-width:80%;
        margin:auto;
        background: #CD2A44;
        height: 606px;
    }

    @media screen and (min-width:769px) and (max-width:1023px) {
        max-width:90%;
        margin:auto;
        background: #CD2A44;
        height: 606px;
    }

    @media screen and (min-width: 1024px) {
        max-width:539px;
        margin:auto;
        background: #CD2A44;
        height: 667px;
    }

    .register{
        @media screen and (max-width: 480px){
            width: 18.1875rem;
            color:white;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width: 18.1875rem;
            color:white;
            margin:auto;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            width: 22.8125rem;
            color:white;
            margin:auto;
        }

        @media screen and (min-width: 1024px) {
            max-width: 22.8125rem;
            color:white;
            margin:auto;
        }
        p{
            font-family: 'Montserrat', sans-serif;
            
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 126%;
            padding-top:5%;
            padding-bottom:5%;

            @media screen and (max-width: 480px) {
                font-family: 'Montserrat', sans-serif;
                text-align:center;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 126%;
                padding-top:5%;
                padding-bottom:5%;
            }
        }
    }

    form{
        width:100%;
    }

    .Label{
        @media screen and (max-width: 480px){
            display:block;
            margin-left:1.625rem;
            padding:1rem 0;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 106%;
            color: #FFFFFF;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            display:block;
            margin-left:1.625rem;
            padding:1rem 0;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 106%;
            color: #FFFFFF;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            display:block;
            margin-left:1.625rem;
            padding:1rem 0;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 106%;
            color: #FFFFFF;
        }

        @media screen and (min-width: 1024px) {
            display:block;
            margin-left:1.625rem;
            padding:1rem 0;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 106%;
            color: #FFFFFF;
        }
    }

    .name{
        background-color:rgba(224, 224, 224, 1);
        border-radius:5px;
        @media screen and (max-width: 480px){
            width:90%;
            margin-left:4%;
            border:none;
            border-radius:5px;
            height:2.8125rem;
            outline:none;
            
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:90%;
            margin-left:4%;
            border:none;
            border-radius:5px;
            height:2.8125rem;
            outline:none;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            width:90%;
            margin-left:4%;
            border:none;
            border-radius:5px;
            height:2.8125rem;
            outline:none;
        }

        @media screen and (min-width: 1024px) {
            padding-left:5%;
            font-size:18px;
            width:85%;
            margin-left:4%;
            border:none;
            border-radius:5px;
            height:3.5rem;
            outline:none;
        }
    }

    button{
        @media screen and (max-width: 480px){
            width:90%;
            margin-left:4%;
            margin-top: 12%;
            background: #0A122A;
            color: #FFFFFF;
            border:none;
            border-radius:5px;
            padding:5%;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 106%;
        }

        @media screen and (min-width:481px) and (max-width:768px) {
            width:90%;
            margin-left:4%;
            margin-top: 12%;
            background: #0A122A;
            color: #FFFFFF;
            border:none;
            border-radius:5px;
            padding:5%;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 106%;
        }

        @media screen and (min-width:769px) and (max-width:1023px) {
            width:90%;
            margin-left:4%;
            margin-top: 12%;
            background: #0A122A;
            color: #FFFFFF;
            border:none;
            border-radius:5px;
            padding:5%;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 106%;
        }

        @media screen and (min-width: 1024px) {
            width:90%;
            margin-left:4%;
            margin-top: 12%;
            background: #0A122A;
            color: #FFFFFF;
            border:none;
            border-radius:5px;
            padding:5%;
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 106%;
        }

    }

    .modal{
        color:white;
        text-align:center;
        font-size:16px;
        font-family: 'Montserrat', sans-serif;
    }
}
`
