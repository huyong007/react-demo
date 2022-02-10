import React, { useState } from "react";

export default function PasswordRevealer({ value }) {
    const [show, setShow] = useState(false);
    
    return <div>
        <input type={show ? 'text' : 'password'} value={value} onChange={() => { }}/>
        <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
    </div>
}