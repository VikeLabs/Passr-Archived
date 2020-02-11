import React, { Component } from 'react'

export class FileSelector extends Component
{
    // Was: "handleChange(selectorFiles: FileList)"
    handleChange = (selectorFiles: any) =>
    {
        console.log(selectorFiles);
    }

    render ()
    {
        return <div>
            <input type="file" onChange={ (e) => this.handleChange(e.target.files) } />
        </div>;
    }
}

