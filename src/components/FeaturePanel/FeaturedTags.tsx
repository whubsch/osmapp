import React from 'react';
import styled from 'styled-components';
import { FeaturedTag } from './FeaturedTag';

const Spacer = styled.div`
  padding-bottom: 10px;
`;

export const FeaturedTags = ({ featuredTags, setDialogOpenedWith }) => {
  if (!featuredTags.length) return null;

  return (
    <>
      {featuredTags.map(([k, v]) => (
        <FeaturedTag key={k} k={k} v={v} onEdit={setDialogOpenedWith} />
      ))}
      <Spacer />
    </>
  );
};
