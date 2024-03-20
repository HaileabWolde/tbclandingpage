import { FormEvent, useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Text } from "../atoms/Text";
import Alert from 'react-bootstrap/Alert';
import { motion } from 'framer-motion';

const NewsLetter = () => {
  const [isLoading, setLoading] = useState(true);
  const [isAlert, setAlert] = useState(false);
  const [alertColor, setAlertColor] = useState<string | null>(null);
  const [alertMessage, setAlertMessage] = useState('');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(false);
    if (form.current) {
      emailjs
        .sendForm(
          'service_7q98i84',
          'template_nb02r3t',
          form.current,
          'YvHMh0v59uU5JOosO'
        )
        .then((result) => {
          if (result.text === 'OK') {
            setAlert(true);
            setLoading(true);
            setAlertColor('#D4EDDA');
            setAlertMessage('Your Message has been sent Successfully!');
          } else {
            // Handle other cases if needed
          }
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  useEffect(() => {
    if (isAlert) {
      const timeout = setTimeout(() => {
        setAlert(false);
      }, 3000); // Adjust the timeout duration (in milliseconds) as needed
      return () => clearTimeout(timeout);
    }
  }, [isAlert]);

  const Alerttype = (color: string | null, message: string) => {
    return (
      <Alert className={`p-3 rounded-lg bg-[${color}]`}>{message}</Alert>
    );
  };

  return (
    <section
      id="CONTACT"
      className="w-full  flex justify-between relative  md:h-[400px]  bg-gradient-to-b from-gray-100 to-gray-100 py-4 md:py-0"
    >
      <main className="w-[90%] mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-[100vw] pr-12 md:p-0 md:w-[50%] h-full">
          <Text className="w-full  h-[80%] flex flex-col items-center justify-center py-6 md:py-8 gap-2">
            <h1 className="text-xl md:text-3xl font-bold font-serif bg-gradient-to-r  from-[#4797C6] to-[#4797C6] bg-clip-text text-transparent">
              Unlocking Possibilities: Contact Us Now!
            </h1>
          </Text>
        </div>
        <div className="w-100% md:w-[45%] ">
          <form
            ref={form}
            className="w-full flex flex-col md:flex-row justify-between md:flex-wrap gap-5 md:gap-2 md:py-6 h-full items-center relative"
            onSubmit={sendEmail}
          >
            {isAlert && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className=" bg-[#D4EDDA]"
              >
                {Alerttype(alertColor, alertMessage)}
              </motion.div>
            )}
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-4 border rounded-lg text-xs md:text-sm shadow-lg outline-none w-full md:w-[45%]"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="p-4  border rounded-lg text-xs md:text-sm shadow-lg outline-none w-full md:w-[45%]"
              required
            />
            <input
              type="text"
              placeholder="Your Company(optional)"
              name="user_company"
              className="p-4  border rounded-lg text-xs md:text-sm shadow-lg outline-none w-full md:w-[45%]"
              required
            />
            <input
              type="text"
              placeholder="Your Subject"
              name="message"
              className="p-4  border rounded-lg text-xs md:text-sm shadow-lg outline-none w-full md:w-[45%]"
              required
            />

            <textarea
              placeholder="please add Your Message here"
              name="user_subject"
              className="uppercase p-10 md:p-4  text-xs md:text-sm border rounded-lg  w-full h-[40%] shadow-lg outline-none"
              required
            />
            <Text className="w-full flex flex-col items-center">
              <button
                type="submit"
                value="Send"
                className="bg-[#FF9900] w-full md:w-auto pt-2 pb-2 pl-12 pr-12 rounded-lg text-sm md:text-base"
              >
                {isLoading ? 'Send' : 'Sending ...'}
              </button>
            </Text>
          </form>
        </div>
      </main>
    </section>
  );
};

export default NewsLetter;