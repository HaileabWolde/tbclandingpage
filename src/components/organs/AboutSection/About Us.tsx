import {motion} from "framer-motion"
import { List, Text, BookingStepsTexts, Card,
    CardImage1, renderIcons} from "./index"
const BookingSteps = () => {
    
    return (
        <section id="ABOUT US" 
        className="w-full bg-[#edf2f8] flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 py-12">
                <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.6,  ease: 'easeInOut'}}
                >
                    <main className='w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5'>
                {/* Text and Steps Container  */}
                <div className='w-full flex flex-col gap-6 order-2 md:order-1'>
                    <Text as="h1" className="lg:text-5xl md:text-3xl text-2xl bg-gradient-to-r  from-[#4698CC]  to-[#4698CC] bg-clip-text text-transparent  font-medium font-serif">
                        {BookingStepsTexts.secondText}
                    </Text>
                    <ul className='flex flex-col gap-8 lg:mt-5 mt-3'>
                        {
                            BookingStepsTexts.listOfSteps.map((step, index) => (
                                <List className='flex gap-5 items-center justify-start' key={index}>
                                    <Text  className={`text-white ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-yellow-400" : "bg-color3"} p-2 rounded-full`}>
                                        {renderIcons(index)}
                                    </Text>
                                    <Text as='h2' className='text-base text-color3 font-light font-serif'>
                                        {step.text}
                                    </Text>
                                </List>

                            ))
                        }
                    </ul>
                </div>
                {/* Card Container  */}
                <div className=' md:w-full md:flex flex-col justify-center lg:items-center items-start relative hidden  md:order-2'>
                    {/* First Card  */}
                    <Card cardClass='lg:w-[70%] md:w-[80%] w-[90%] shadow-2xl shadow-sky-500/70 p-4 rounded-xl flex flex-col gap-4' imageAlt={BookingStepsTexts.cardOne.name} imageSrc={CardImage1} imageWrapperClass='h-[450px] overflow-hidden rounded-xl shadow' cover='object-cover object-top ' textWrapperClass='flex flex-col gap-3'>
                       
                    </Card>  
                </div>
            </main>
                </motion.div>
            
        </section>
    )
}

export default BookingSteps