import { styled } from "styled-components";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
    // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    box-shadow: 0 2px 15px -2px #3d61af4d;
    // background: aliceblue;

    // padding: 30px 50px;
    padding: 25px;
    border-radius: 30px;
`;

export const Title = styled.h2`
    color: #444445;
    text-align: center;
`;

export const DragDrop = styled.div`
    // border: 1px dashed #c0c1c2;
    border: 2px dashed #f2644f;
    height: inherit;
    border-radius: inherit;
    // border-radius: 18px;
    background-color: #fef6f3;
    
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
`;

export const Paragraph = styled.p`
    color: #444445;
    margin-right: 10px;
    font-family: Montserrat,sans-serif;
`;

export const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    font-family: Montserrat,sans-serif;
    color: #444;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    font-size: 18px!important;
    font-weight: 300!important;
    line-height: 36px!important;
    margin: 0!important;
`;

export const InputFile = styled.input`
    display: none;
`;

export const Downloading = styled.div`
    // border: 1px solid #c0c1c2;
    margin: 30px 0 0;
    position: relative;
`;


export const CrossButton = styled(CloseRoundedIcon)`
    // border: 1px solid;
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
`;

export const ContentFile = styled.div`
    display: flex;
`;

export const ContentIcon = styled.img`
    width: 75px;
    height: 90px;
    
    // border: 1px solid;
    margin: 0 10px;

`;

export const ContentTitle = styled.div`
    // border: 1px solid;
    width: -webkit-fill-available;
    margin: 0 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProgressBar = styled.div`
    height: 10px;
    // border: 1px solid #c21ad1;
    border-radius: 50px;
    background-color: #ececec;
`;

export const progressLine = {
    'background': '#c21ad1',
    'height': 'inherit',
    'borderRadius': 'inherit',
}

export const SizePercentage = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.p`

`;