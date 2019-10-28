import styled from 'styled-components'


export const RecipeFormContainer = styled.div`
background-color:"#e3dfda";
color: black;
margin-left: 170px;
margin-right: 170px;
}


.recipe-title {
    color: black;
    font-weight: bold;
    font-size: 2.8vw;
    padding: 15px;
}

.recipe-submit-button {
    background-color: #f7f6f5;
    color: black;
    border: 1px solid #f7f6f5;
    justify-content: center;
    padding-left: 85px;
    padding-right: 85px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-radius: 4px;
    letter-spacing: 4px;
    font-weight: bold;
    font-size: 1.3rem;
}

.recipe-submit-button:hover {
  box-shadow: 1px 3px 12px 0px #b3b3b3;
  color: black;
  background: white;
}

/**************************** MEDIA-QUERY-IPHONE X ***************************/
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  form {
    margin-left: -170px;
margin-right: -170px;
  }

    .recipe-image {
    width: 5vw;
    height: 6vw;
}
.recipe-title {
  
    font-size: 5vw;
    margin-left: -170px;
margin-right: -170px;
  
}
}

`