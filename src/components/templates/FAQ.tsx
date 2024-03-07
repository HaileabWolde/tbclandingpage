import { useState } from "react";
import { motion } from "framer-motion";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

interface FAQProps {
    DataOne: {
    cards: {
      firstText: string;
      secondText: string;
    }[];
  };
}

const FAQ = ({ DataOne }: FAQProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-100 to-gray-100">
      <main className="w-[80%]  flex flex-col gap-12 mx-auto">
        <Text className="w-full flex flex-col justify-center text-3xl font-serif mt-[50px] font-bold">
          FAQ
        </Text>
        <ul className="w-full flex flex-col">
          {DataOne.cards.map((card, index) => (
            <Text
              className="w-full flex flex-col mb-12"
              style={{ transition: "max-height 0.3s ease" }}
              key={index}
            >
              <Text className="w-full flex justify-between mb-6">
                <Text className="text-2xl">{card.firstText}</Text>
                <Button onClick={() => handleCardClick(index)}>
                  {expandedIndex === index ? (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaAngleDown />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaAngleUp />
                    </motion.div>
                  )}
                </Button>
              </Text>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 text-sm md:text-base"
                >
                  {card.secondText}
                </motion.div>
              )}
              <hr className="border-2" />
            </Text>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default FAQ;