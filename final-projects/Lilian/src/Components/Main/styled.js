import styled from "styled-components"

export const SubmitButton = styled.button`
    color: white;
    background-color: rgb(44 38 64);
    padding: 10px;
    width: 150px;
    cursor: pointer;
    border-color: white;
    margin-top: 10px;
`

export const Container = styled.div`
    background-color: rgb(44 38 64);
    display: flex;    
    justify-content: flex-start;
    align-items: center;
    height: 400px;
    margin: 18px;    
    width: 100%;
    
    @media (max-width: 768px) {
      padding: 10px;
              
    }
    @media (max-width: 600px){
        flex-direction: column-reverse;
        align-items: center;
        height: 900px;      
    }
 
`

export const Text = styled.div`
    color: white;
    font-size: 16px;   
    height: 300px;
    width: 40%;

    @media (max-width: 1000px){
        width: 400px;
        padding: 40px;
        margin-left: 70px;
    }
    @media (max-width: 900px){
        padding: 20px;
        width: 300px;
    }
    @media (max-width: 755px){
        width: 200px;
        padding: 10px;
        margin-left: 30px;        
    }
`

export const H1 = styled.h1`
    font-weight: revert;  
    font-size: 1.8rem;  
`

export const Hr = styled.hr`
    width: 100px;
    margin-left: 0px;
`

export const DivImage = styled.div`
    display: flex;  
    height:100% ;
    width: 50%;
    @media (max-width: 751px){
        width: 200px;        
    }   
`

export const Img = styled.img`
    width: 350px;
    z-index: 1;
    margin-top: 60px;     

    @media (max-width: 1000px){
        max-width: 200px;

    }
    @media (max-width: 755px){
       
        margin: 0;
    }
`

export const Div = styled.div`
    width: 100%;
    height: 100%;
    @media (max-width: 100px){
        width: 100%;
    }
`

export const ImgRightContent = styled.div`
    height: 350px;
    width: 300px;
    position: absolute;
    margin-left: 190px;      
`

export const ImgRight = styled.img`
    z-index: 2;
    position: absolute;
    height: 350px;
    width: 300px;  

    @media (max-width: 1000px){
        width: 100px;
        margin-left: 40px;        
    }
    @media (max-width:751px){
        margin-left: 10px;
        width: 50px;
        display: none;      
    }
`

export const ImgContainer = styled.div`
    width: 150px;
    height: 300px;    
`

export const ImgLeft = styled.img`
    padding: 0px;
    width: 150px;
    height: 300px;
    z-index: 1;
    margin-top: 240px; 

    @media (max-width: 1000px){
        width: 100px;
    }
    @media (max-width: 800px){
        visibility: hidden;
    }
`

export const P = styled.p`
    color: rgb(207 206 210);
    font-size: 0.650rem;
`
