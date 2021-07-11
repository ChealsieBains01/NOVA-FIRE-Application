import React from "react";
import {
    Button,
    Container,
    Typography
} from "@material-ui/core";
import { useFilePicker } from 'use-file-picker';
import {CloudUpload,Close} from '@material-ui/icons';

const Upload = () => {
    const [openFileSelector, { filesContent, loading, errors, plainFiles, clear }] = useFilePicker({
        multiple: true,
        readAs: 'DataURL', // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
        // accept: '.ics,.pdf',
        accept: ['.json', '.pdf'],
        limitFilesConfig: { min: 2, max: 3 },
        // minFileSize: 1, // in megabytes
        // maxFileSize: 1,
        // readFilesContent: false, // ignores file content
      });
    
      if (errors.length) {
        return (
          <Container>
            <Button onClick={() => openFileSelector()}>Something went wrong, retry! </Button>
            {errors[0].fileSizeTooSmall && 'File size is too small!'}
            {errors[0].fileSizeToolarge && 'File size is too large!'}
            {errors[0].readerError && 'Problem occured while reading file!'}
            {errors[0].maxLimitExceeded && 'Too many files'}
            {errors[0].minLimitNotReached && 'Not enought files'}
          </Container>
        );
      }
    
      if (loading) {
        return <div>Loading...</div>;
      }
    
      return (
        <div style={{height:`${70}vh`}}>
          <Button onClick={() => openFileSelector()} style={{background:`#1A6F4C`,height:`${30}vh`,width:`${80}%`,color:`#fff`,textAlign:`center`}}> <CloudUpload style={{fontSize:`${15}em`,display:`block`}}/> Select file </Button>

          <Button onClick={() => clear()} style={{background:`red`,height:`${6}vh`,width:`${40}%`,color:`#fff`,marginTop:`${5}em`,marginBottom:`${1}em`}}>Clear <Close/></Button>
          <br />
         <Typography style={{color:`#323865`,fontFamily: `poppins`,fontWeight:900}}> Number of selected files:
          {plainFiles.length}
          {/* If readAs is set to DataURL, You can display an image */}
          {!!filesContent.length}
          </Typography>
          {plainFiles.map(file => (
            <div key={file.name}>{file.name}</div>
          ))}
        </div>
      );
}
export default Upload;