import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import '../Styles/LetsTalk.css'

export const LetsTalk = () => {

  const Result = () =>{
    return (
      <p><font color="white">Mensaje enviado correctamente</font></p>
    )
  }

  const [result, setresult] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h7xrybi', 'template_pgouc99', form.current, 'lmhTfUzJKlLhwaMUM')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
      setresult(true);
  };

  return (
    <div className='contactoBox'>
      <h1>Contactame</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className='contacto'>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name="to_name" ></input>

          <label htmlFor="correo">Correo</label>
          <input type="email" name="email" ></input>

          <label htmlFor="">Mensaje</label>
          <textarea name='message' ></textarea>
          <p> {result ? <Result/> : null } </p>

          <button>Enviar</button>
          
        </div>
      </form>
    </div>
  )
}
