import { Text } from "../../atoms/Text"
import { ServiceTexts } from "../../particles/Services"
import { Card } from "../../molecules/Card"
import MobileApp from "../../../assets/MobileApp.png"
import SoftwareDev from "../../../assets/Software Development.png"
import TechnologyConsultancy from "../../../assets/Technology Consultancy.png"
import Charts from "../../../assets/Charts.png"
import Database from "../../../assets/Database.png"
import Dashboard from "../../../assets/DashboardOne.png"

export const renderServiceIcon = (element: number) => {
    switch (element) {
        case 0:
            return SoftwareDev;
        case 1:
            return TechnologyConsultancy;
        case 2:
            return MobileApp;
        case 3:
            return Charts;
        case 4:
            return Database;
        case 5:
            return Dashboard
        default:
            return "";
    }
}
export {
    Text , ServiceTexts, Card
}