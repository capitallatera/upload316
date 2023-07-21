import { styled } from "styled-components";

export const Wrapper = styled.div`
    height: -webkit-fill-available;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: rgb(127,127,213);
    // background: linear-gradient(90deg, rgba(127,127,213,1) 0%, rgba(145,234,228,1) 100%);
`;

export const Card = styled.div`
    width: calc(100% - 300px);
    // height: calc(100% - 300px);
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    // background: aliceblue;

    padding: 30px 50px;
`;

export const Title = styled.h2`
    color: #444445;
    text-align: center;
`;

export const DragDrop = styled.div`
    border: 1px dashed #c0c1c2;
    height: inherit;
    border-radius: inherit;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Paragraph = styled.p`
    color: #444445;
    margin-right: 10px
`;

export const Button = styled.button`
    
`;

export const InputFile = styled.input`
    display: none;
`;