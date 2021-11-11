import styled from "styled-components";

const Modal = ({ active, setActive }) => {
    return (
        <StyledModal className={ active ? "active" : "" }>
            <div onClick={() => setActive(!active)} className="overlay" />
            {/* <div className="content">
                Your request has been submitted..
            </div> */}
        </StyledModal>
    )
}

export default Modal

const StyledModal = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    // // width: 50vw;
    // // height: 100vh;
    // z-index: 1;
    // background-color: rgba(0, 0, 0, 0.4);
    // display: none;
    // align-items: center;
    // justify-content: center;

    // &.active {
    //     display: flex;
    // }

    // .overlay {
    //     position: absolute;
    //     margin-top: 870px;
    //     cursor: pointer;
    // }

    // // .content{
    // //     position: relative;
    // //     z-index: 2;
    // //     width: 90%;
    // //     max-width: 500px;
    // //     min-height: 300px;
    // //     background: #fff;
    // //     display: flex;
    // //     align-items: center;
    // //     justify-content: center;
    // //     font-size: 2rem;
    // //     font-weight: 700;
    // //     font-family: 'nexabold';
    // //     color: #090C9B;
    // //     text-align: center;
    // //     padding: 2rem 1.5rem;
    // //     border-radius: 10px;
    // //     border-top: 5px solid #090C9B;
    // // }

    .content{
        text-align:center;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 106%;
        color: white;
    }
`