import React, { useRef, useState } from 'react'
import {
  Button,
  Card,
  ContentFile,
  ContentIcon,
  ContentTitle,
  CrossButton,
  Downloading,
  DragDrop,
  InputFile,
  Paragraph,
  ProgressBar,
  SizePercentage,
  Text,
  Title,
  Wrapper,
  progressLine
} from './style';


function dragEnter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragOver(e) {
  e.stopPropagation();
  e.preventDefault();
}
const uploadObj = {loaded: 0, total: 0, title: '', content: {}, done: false}

function Upload() {
  const inputRef = useRef();
  const [uploading, setUploading] = useState(uploadObj);

  const drop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles(files)
  }

  const handleFiles = (file) => {
    setUploading((data)=>({ ...data, title: file[0].name}));
    // console.log(file[0].name)
    var data = new FormData();
    data.append("file", file[0], file[0].name);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        // console.log(this.responseText);
        setUploading((data) =>({...data, content: this.responseText, done: true}))
      }
    });

    xhr.open("POST", "http://localhost:5001/upload");
    xhr.upload.onprogress = (event) => {
      setUploading((data)=> ({...data, loaded: event.loaded, total: event.total}))
    }
    xhr.send(data);
  }
  // console.log(uploading, "uploading")
  const title = uploading.title
  const total = parseFloat(convertToMB(uploading.total)).toFixed(2);
  const loaded = parseFloat(convertToMB(uploading.loaded)).toFixed(2);
  const percentage = parseInt((uploading.loaded / uploading.total) * 100);

  const handleCrossButton = () => {
    // console.log('Working here')
    setUploading(uploadObj)
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
            onChange={(e) => {
              handleFiles(Array.from(e.target.files))
              inputRef.current.value = null
            }}
          />
        </DragDrop>
        {!!title ? (
          <Downloading>
            {uploading.done ? <CrossButton onClick={()=> handleCrossButton()} /> : null}
            <ContentFile>
              <ContentIcon src={require('../../Assets/jpg.png')} />
              <ContentTitle>
                <Text>
                  {title}
                </Text>
                <ProgressBar>
                  <div style={{ ...progressLine, width: `${percentage}%` }} />
                </ProgressBar>
                <SizePercentage>
                  <Text>
                    {uploading.done ? `${total}MB`: `${loaded || 0.2} of ${total || 2.0} MB`}
                  </Text>
                  {!uploading.done ? (
                    <Text>
                      {`${percentage || 0}%`}
                    </Text>
                  ) : <Text />}
                </SizePercentage>
              </ContentTitle>
            </ContentFile>
          </Downloading>
        ) : null}
      </Card>
    </Wrapper>
  )
}

export default Upload;

const convertToMB = (value) => value / (1024*1024);