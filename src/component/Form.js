import  { useRef,useState } from 'react'
import styled from 'styled-components'
import Modal from './Modal';

const Form = () => {
    const scriptUrl = "https://script.google.com/macros/s/AKfycbxSXjrzw_lMCpy7x0zj-t-Of0lf5rqQ0CNrsmXElBxvqQ8Sp2Hu41AB4EF_g38A_s7Hmg/exec";
    const [loading, setLoading] = useState(false)
    const [active, setActive] = useState(false);
    const [values,setValues] = useState({
        name:"",
        email:"",
        phoneNumber:""
    })

    // const { name, email, phoneNumber} = values

    const handleChange = e => {
        setValues({...values, [e.target.name] : e.target.value})
    }
        
    const formRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, { method: 'POST', body: new FormData(formRef.current) })
        .then(res => {
            setLoading(false)
            setActive(true)
        })
        .catch(err => console.log(err))

        // try {
        //     const response = await fetch('https://v1.nocodeapi.com/roguecodes/google_sheets/DOaTiRxmCeoXpUCF?tabId=sheet1',{
        //         method : 'POST',
        //         headers : {
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify([[name, email, phoneNumber]])

        //     })
        //     await response.json()
        //     setValues({...values, name:'', email:"", phoneNumber:""})
        // } catch (error) {
        //     console.log(error)
        // }
    }
        




    return (
        
        <StyledForm>
            
            <div className="formcontainer">
                <div className="register"><p>Join the waiting list to be among the first <br /> to be notified when the book launch</p></div>

                <form name='form' onSubmit={handleSubmit} ref={formRef}>
                <label htmlFor="" className='Label'>Name</label>
                <input type="text" name='name' className='name' required  value={values.name} onChange={handleChange}/>

                <label htmlFor="" className='Label'>Email</label>
                <input type="text" name='email' className='name' required value={values.email} onChange={handleChange}/>

                <label htmlFor="" className='Label'>Phone Number</label>
                <input type="text" name='phoneNumber' className='name' required value={values.phoneNumber} onChange={handleChange}/>

                <button type='submit'>{loading ? "Loading..." : "SUBMIT"}</button>

                </form>
                <Modal active={active} setActive={setActive} />
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
            width:90%;
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
}
`
