import { useRef, useState , useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { Text } from "../atoms/Text"
import Alert from 'react-bootstrap/Alert';
import { motion } from 'framer-motion';
import { ClassNames } from '@emotion/react';

const NewsLetter = () => {
    const [isloading, setLoading] = useState(true)
    const [isAlert, setAlert] = useState(false)
    const [alertColor, setAlertColor] = useState(null)
    const [alertMessage, setalertMessage] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(false)
        emailjs.sendForm(
            'service_bqillxc', 
            'template_2xe1z6v', 
            form.current, 
            'YvHMh0v59uU5JOosO')
          .then((result) => {
            
            if(result.text === "OK"){
                setAlert(true)
                setLoading(true)
                setAlertColor('#D4EDDA')
                setalertMessage('Your Message has been sent Successfully!')
            }
            else {

            }
              
          }, (error) => {
              console.log(error.text);
          });
      };
      useEffect(() => {
        if (isAlert) {
          const timeout = setTimeout(() => {
            setAlert(false);
          }, 3000); // Adjust the timeout duration (in milliseconds) as needed
          return () => clearTimeout(timeout);
        }
      }, [isAlert]);

     const Alerttype = (color, message) => {
      return (
        <Alert className={`p-3 rounded-lg bg-[${color}]`}>{message}</Alert>
      )
     } 
    return (
        <section className="w-full mt-12 mb-[200px] flex justify-between relative  h-[400px]  bg-gradient-to-b from-gray-100 to-gray-100">
          <main className="w-[90%] mx-auto flex justify-between gap-4">
            <div className="w-[50%]">
                <Text className="w-full  flex flex-col items-center py-8 gap-2">
                    <h1 className="text-3xl font-serif">Give Us A Call</h1>
                    <h2 className='text-2xl font-sans font-semibold'>In Ethiopia</h2>
                    <h3 className='text-xl font-sans'>+251979060679 </h3>
                    <h2 className='text-2xl font-sans font-semibold'>In America</h2>
                    <h3 className='text-xl font-sans'>Merryland +13016553123 </h3>
                    <h1 className="text-3xl font-serif">Send Us Email</h1>
                    <h3 className='text-xl font-sans hover:underline cursor-pointer'>info@TBC.com</h3>
                </Text>

            </div>
            <div className="w-[45%] ">
                <form ref={form}  className="w-full flex justify-between flex-wrap gap-2 py-6 h-full items-center relative" onSubmit={sendEmail}>
                {
                    isAlert &&  
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut'}}
              className=' bg-[#D4EDDA]  '
                    >
                     
                   
                  {Alerttype(alertColor, alertMessage)}
                    </motion.div>
                   
                }
                <input 
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="p-4 border rounded-lg text-sm shadow-lg outline-none w-[45%]"
                required
                />
                <input 
                type="email"
                placeholder="Email"
                name="user_email"
                className="p-4  border rounded-lg text-sm shadow-lg outline-none w-[45%]"
                required
                />
                <input
                type="text"
                placeholder="Your Company(optional)"
                name="user_company"
                className="p-4  border rounded-lg text-sm shadow-lg outline-none w-[45%]"
                required/>
                <input
                type="text"
                placeholder="Your Subject"
                name="message"
                className="p-4  border rounded-lg text-sm shadow-lg outline-none w-[45%]"
                required/>
                 
                <textarea
                type="text"
                placeholder="please add Your Message here"
                name="user_subject"
                className="p-4  border rounded-lg  w-[100%] h-[40%] shadow-lg outline-none"
                required
                />
                <Text className='w-full flex flex-col items-center'>
                <button
                type="submit" 
                value="Send"
                className="bg-[#FF9900] pt-2 pb-2 pl-12 pr-12 rounded-lg">{isloading ? 'Send' : 'Sending ...'}</button>
                </Text>
               
                </form>
              
            </div>
          </main>
          
        </section>
    )
}

export default NewsLetter