import React, { useRef } from 'react'
import { Button, Card, DragDrop, InputFile, Paragraph, Title, Wrapper } from './style';

function dragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragOver(e) {
  e.stopPropagation();
  e.preventDefault();
}


function Upload() {
  const inputRef = useRef();
  
  const drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files)
  }

  const handleFiles = (file) => {
    console.log(file[0].name)
    var data = new FormData();
    data.append("file", file[0], file[0].name);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "http://localhost:5001/upload");
    xhr.upload.onprogress = (event) =>{
      console.log(event)
    }
    xhr.send(data);
  }
  
  return (
    <Wrapper>
        <Card> 
            <Title>Upload</Title>
            <DragDrop
              onDragEnter={dragEnter}
              onDragOver={dragOver}
              onDrop={drop}
            >
                <Paragraph>Drag and drop files here Or </Paragraph>
                <Button onClick={() => inputRef.current.click()}>Select file</Button>
                <InputFile 
                  type="file"
                  name="file"  
                  ref={inputRef}
                  onChange={(e)=> {
                    handleFiles(Array.from(e.target.files))
                    inputRef.current.value = null
                  }}
                />
            </DragDrop>
        </Card>
    </Wrapper>
  )
}

export default Upload;