import React from 'react';
import Banking from '../Financepage/Bank & Financial/Banking';
import Ecosystems from '../Financepage/Bank & Financial/Ecosystems';
import Solution from '../Financepage/Bank & Financial/Solution';
import QA from '../Financepage/Bank & Financial/QA';

const BankFinancial = () => {
  return (
    <div className="w-full">
      <Banking />
      <Ecosystems />
      <Solution />
      <QA />
    </div>
  );
};

export default BankFinancial;