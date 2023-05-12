import React from "react";

interface TextFieldProps {
  leftSide: string;
  type: string;
}

export default function TextField2({leftSide, type}:TextFieldProps): JSX.Element {
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <span style={{ color: '#00000099', fontSize: '13px' }}>{leftSide}{type==="text" ? '*': ''}</span>
        {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label> */}
        <div  className="textField2-big-div mt-1">
          <input
            required
            type={type}
            name="text"
            id="text"
            style={{ width: '185px',height:"32px", fontSize: '13px', fontWeight: '480' }}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder={leftSide}
          />
        </div>
      </div>
    )
  }
  