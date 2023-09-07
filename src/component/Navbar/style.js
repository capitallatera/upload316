import { styled } from "styled-components";

export const Wrapper = styled.div`
    border-bottom: 3px solid;
    height: 90px; // remove later
    border-image: linear-gradient(to right,#f26450,#e73a67) 90;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    box-shadow: 0 6px 15px -5px #ddd;
`;

export const Icon = styled.div`
    
`;

export const Image = styled.img`
    width: 200px;
    height: auto;
`;

export const Link = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
`;

export const UserButtons = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.p`
    text-transform: capitalize;
    font-size: 16px;
    color: ${props => props.active ?  '#f26450' : '#152b5a'};
    font-weight: 500;
    cursor: pointer;
`;

export const Button = styled.button`
    color: ${props => props.primary ? '#fff' : '#152b5a'};
    background: ${props => props.primary ? 'linear-gradient(90deg,#f26450 0,#ed525a 35%,#e73a67 100%)' : '#fff'};
    font-size: 14px;
    border: 1px solid;
    border-radius: 12px;
    padding: 15px 30px;
    text-transform: capitalize;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        background: ${props => props.primary ? '0 0' : 'linear-gradient(90deg,#f26450 0,#ed525a 35%,#e73a67 100%)'};
        border-image: linear-gradient(to right,#f26450,#e73a67) 90!important;
        border: 1px solid!important;
        color: ${props => props.primary ? '#f26450' : '#fff'};
      }
`;