import styled from 'styled-components'


export const Calculator = styled.div`
    width: 270px;
    padding: 10px;
    display: block;
    margin: 20px auto;
    background-color: #000;

    @media (max-width: 450px) {
        width: 100%;
        height: 104vh;
        margin: 0;
    }
`

export const PadStyle = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;

    @media (max-width: 450px) {
        width: 95%;
        height: 75vh;
    }

        button {
            border: none;
            padding: 10px;
            height: 60px;
            border-radius: 50%;
            font-size: 28px;
            color: #fff;

            &:focus {
                outline: none;
            }
            
            @media (max-width: 450px) {
                width: 100%;
                height: 100%;
            }

        }

    .item-0 {
        grid-column: 1/ span 2;
        border-radius: 25px;

        @media (max-width: 450px) {
            border-radius: 40px;
        }
    }

    .central-block{
        background-color: #696969;

        &:hover {
            background-color: #808080;
        }
    }

    .right-block {
        background-color: #ff8800;

        &:hover {
            background-color: #fffcf3;
            color: #ff8800;
        }
    }

    .top-block{
        background-color: #adadad;

        &:hover {
            background-color: #c7c7c7;
            color: #000;
        }
    }
`


export const Display = styled.div `
    width: 100%;
    padding: 0 10px 10px 0;
        
    div {
        height: 100%;
        font-size: 60px;
        text-align: right;
        color: #fff;
    }

    @media (max-width: 450px) {
        height: 15vh;
        width: 95%;

        div {
            font-size: 80px
        }

    }
`

export const BackBtnStyle = styled.div`
    text-align: right;

    svg {
        color: #696969;
        font-size: 35px;

        &:hover {
            color: #808080;
        }
    }
    @media (max-width: 450px) {
      margin-right: 7%;  
    }
`