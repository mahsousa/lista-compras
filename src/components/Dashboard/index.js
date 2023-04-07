import React from 'react'
import DashItem from '../DashItem';
import * as C from "./style"; 
import{
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Dashboard = () => {
  return (
      <C.Container>
        <DashItem  title="Entradas" Icon={FaRegArrowAltCircleUp} value="1000"/>
        <DashItem title="Saidas" Icon={FaRegArrowAltCircleDown} value="1000"/>
        <DashItem title="Total" Icon={FaDollarSign} value="1000"/>
      </C.Container>
  );
};

export default Dashboard;