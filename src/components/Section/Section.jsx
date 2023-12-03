import React from 'react';
import { SectionContainer, SectionTitle } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
}
