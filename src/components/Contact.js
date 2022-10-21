import React, {useState} from 'react';

const Contact = () => {
    const [Click, setClick] = useState("");
    if(Click) {
        return <div style={{'justifyItems':'stretch',}}>
            <div><a href="https://github.com/Urvi-Pandit">github</a></div>
            <div><a href="2020.urvi.pandit@ves.ac.in">Mail</a></div>
            <div><a href="https://www.linkedin.com/in/urvi-pandit-685323227/">LinkedIn</a></div>
        </div>
    } else
    {
        return <button onClick={()=>setClick('true')}>Contact me</button>
    }
}

export default Contact;