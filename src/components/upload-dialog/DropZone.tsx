import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'
import React from 'react';
// import 'pdf-parse';
// import {defaultClassNames} from 'dropzone'

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
  return (
    <div>
      {previews}
      <br></br>
      <div {...dropzoneProps}>{files.length < maxFiles && " " && input}</div>
      <br></br>
      {files.length > 0 && submitButton}
    </div>
  )
}

export const CustomLayout = () => {
  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'https://httpbin.org/post' })
  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
    // allFiles.forEach()
    
  }



  return (
    <Dropzone
      getUploadParams={getUploadParams}
      LayoutComponent={Layout}
      onSubmit={handleSubmit}
    //   classNames={{ inputLabelWithFiles: defaultClassNames.inputLabel }}
      inputContent=""
    />
  )
}
export default CustomLayout;
