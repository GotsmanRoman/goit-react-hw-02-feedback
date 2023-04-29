import React from 'react';
import { Title, SectionContainer } from './Section.module';

const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);
export { Section };
