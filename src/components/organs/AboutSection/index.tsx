import { Eye, Lightbulb} from '@phosphor-icons/react'
import { List } from '../../atoms/List'
import { Text } from '../../atoms/Text'
import { BookingStepsTexts } from '../../particles/MIssion'

import { Card } from '../../molecules/Card'
import CardImage1 from "../../../assets/RocketB.jpg"

export const renderIcons = (element: number) => {
    switch (element) {
        case 0:
            return <Eye size={15} color="currentColor" weight="fill" />;
        case 1:
            return <Lightbulb size={15} color="currentColor" weight="fill" />;
        default:
            return "";
    }
}
export {
    List, Text, BookingStepsTexts, Card,
    CardImage1
}