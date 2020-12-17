import styled from 'styled-components'


const Styles = styled.div`
  width: 270px;
  padding: 10px;
  display: block;
  margin: 20px auto;
  background-color: #000;

  @media (max-width: 450px) {
    width: 100%;
    height: 104vh;
    margin: 0;

  .display{
      height: 20vh;
      
      div {
          padding-top: 10vh;
      }
  }
  
  .calcForm {
      width: 100%;
      height: 80vh;

      button {
          width: 100%;
          height: 100vh;
      }

  }
}
  
  .display {
    width: 100%;
    padding: 0 10px 10px 0;
        
    div {
        height: 100%;
        font-size: 60px;
        text-align: right;
        color: #fff;
    }
  }

  .calcForm {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 1fr;
    grid-gap: 10px;

    button {
        border: none;
        padding: 10px;
        height: 100%;
        border-radius: 50%;
        font-size: 28px;
        color: #fff;

        &:focus {
            outline: none;
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
            background-color: #ffa238;
        }
    }

    .top-block{
        background-color: #adadad;

        &:hover {
            background-color: #c7c7c7
        }
    }
  }

`

export default Styles