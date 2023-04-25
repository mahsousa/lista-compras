import React from 'react'
import DashItem from '../DashItem';
import Assets from '../Assets';
import * as C from "./style"; 
import{
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";


const Dashboard = ({entrada, saida, total}) => {
  return (
      <C.Container>
        <DashItem  title="Total Orçamento" Icon={FaRegArrowAltCircleUp} value={entrada}/>
        <DashItem title="Total Gasto" Icon={FaRegArrowAltCircleDown} value={saida}/>
        <DashItem title="Disponivel" Icon={FaDollarSign} value={total}/>
        <Assets
        
        />
      </C.Container>
  );
};

export default Dashboard;