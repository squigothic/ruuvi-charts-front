import React from 'react';
import { TagData } from '../../types';

const Tag = ({ tag }: { tag: TagData }) => {
  return <p>{tag.tagName}</p>;
};
export default Tag;
