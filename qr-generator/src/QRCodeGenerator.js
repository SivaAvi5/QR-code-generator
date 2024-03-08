import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './style.css'

const QRCodeGenerator = () => {
const [qrCode,setQrcode] = useState('')
const [input,setInput] = useState('')

const handleGenerateQrCode = () =>{
    setQrcode(input)
    setInput('')
}

  return (
    <div className='qr-container'>
        <h1 className='header'>QR Code Generator</h1>
        <div className='input-container'>
            <input onChange={(e) => setInput(e.target.value)}
            value={input}
             type='text' name='qr-code' placeholder='Enter your value here' />
            <button  disabled={input && input.trim() !== '' ? false:true} onClick={() => handleGenerateQrCode()}>Generator</button>
        </div>
        <div>
           <QRCode
            id='qr-code-value'
            value={qrCode}
            size={300}
            bgColor='#fff'
           />
        </div>
    </div>
  )
}

export default QRCodeGenerator