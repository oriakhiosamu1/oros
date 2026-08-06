// import React,{useState, useRef} from 'react'
// import emailjs from "@emailjs/browser";
// import { Container, Row, Col } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import './Contact.css'

// const Contact = () => {
//     const form = useRef();
//     const [done, setDone] = useState(false)
//     const [notDone, setNotDone] = useState(false)
//     const [formData, setFormData] = useState({});

//     const handleChange = (e) => {
//         setFormData({...formData, [e.target.name] : e.target.value})
//         setDone(false)
//         setNotDone(false)
//     }

//     const sendEmail = (e) => {
//     e.preventDefault();
    
//     if(!formData.from_name || !formData.reply_to ||!formData.message){
//       setNotDone(true)
//     } else {
      
//       //  Please use your own credentials from emailjs or i will recive your email
      
//     emailjs
//       .sendForm(
//         // "service_niilndo",
//         // "template_6z5idye",
//         // form.current,
//         // "VOBt6Akm1LhI5CZG-"
//         "service_jvvpuem",
//         "template_el56bw8",
//         form.current,
//         "CMCvtJBtq1jIVG93L",
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           setDone(true);
//         },
//         (error) => {
//           console.log(error);
//         }
//       );
//     }
//     };
    

//     return(
//         <Container style={{paddingTop: '50px'}} >
//             <Row >
//             <Col md={6} className="c-left" >
//             <h1 >Get in Touch</h1>
//             <h1 className="yellow">Contact me</h1>
//             </Col>
//             <Col md={6} className="c-right">
//                 <form ref={form} onSubmit={sendEmail}>
//                 <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
//                 <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
//                 <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
//                 <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
//                 <Button type="submit" className="button" disabled={done}>Send</Button>
//                 <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
//                 </form>
//             </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Contact



import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

// Replace these with YOUR OWN EmailJS credentials from emailjs.com
// (Email Services -> Service ID, Email Templates -> Template ID,
//  Account -> API Keys -> Public Key)
const EMAILJS_SERVICE_ID = "service_jvvpuem";
const EMAILJS_TEMPLATE_ID = "template_7vq7nn5";
const EMAILJS_PUBLIC_KEY = "CMCvtJBtq1jIVG93L";

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [sendError, setSendError] = useState(false)
    const [sending, setSending] = useState(false)
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setDone(false)
        setNotDone(false)
        setSendError(false)
    }

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true)
            return
        }

        setSending(true)
        setNotDone(false)
        setSendError(false)

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                form.current,
                EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true);
                    setSending(false);
                    form.current.reset();
                    setFormData({});
                },
                (error) => {
                    console.log(error);
                    setSendError(true);
                    setSending(false);
                }
            );
    };

    return (
        <Container style={{ paddingTop: '50px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="from_name" className="user" placeholder="Name" onChange={handleChange} />
                        <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                        <span className='not-done'>{notDone && "Please, fill all the input field"}</span>
                        <span className='not-done'>{sendError && "Something went wrong sending your message. Please try again or reach out on LinkedIn."}</span>
                        <Button type="submit" className="button" disabled={sending}>
                            {sending ? "Sending..." : "Send"}
                        </Button>
                        <span className='done'>{done && "Thanks for contacting me — I've received your message and will get back to you soon. You can also reach me on LinkedIn."}</span>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact