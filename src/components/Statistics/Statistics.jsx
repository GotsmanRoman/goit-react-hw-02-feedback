import React from 'react';
import { DataList, DataElem } from './Statistics.module';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <DataList>
    <DataElem>Good: {good}</DataElem>
    <DataElem>Neutral: {neutral}</DataElem>
    <DataElem>Bad: {bad}</DataElem>
    <DataElem>Total: {total}</DataElem>
    <DataElem>
      Positive feedback: <span>{positivePercentage}%</span>
    </DataElem>
  </DataList>
);

export { Statistics };
