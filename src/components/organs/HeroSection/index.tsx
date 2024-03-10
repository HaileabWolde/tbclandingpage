import TESTSIX from "../../../assets/TESTSIX.jpeg";
import TESTSEVEN from "../../../assets/TESTSEVEN.jpeg"
import TESTEIGHT from '../../../assets/Software Development Test.jpg'
import TESTNINE from "../../../assets/TESTNINE.jpg"
import TESTTEN from "../../../assets/Software Development_result.png"
import {CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Text } from "../../atoms/Text";
import { Card } from "../../molecules/Card";
import { Button } from "../../atoms/Button";
import {Chat } from "@phosphor-icons/react";
import { DataOne } from "../../particles/TBC Soltuion";
export const renderProfileImg = (element: number) => {
    switch (element) {
      case 0:
        return TESTSIX;
      case 1:
        return TESTSEVEN;
      case 2:
        return TESTEIGHT;
      case 3:
        return TESTNINE;
      case 4:
        return TESTTEN;
      default:
        return "";
    }
  }

  export {
    CaretLeft, CaretRight,
    Text, Card, Button, Chat,
    DataOne
  }