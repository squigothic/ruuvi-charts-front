import { TagData, TagReducerAction } from '../types';

const initialState: TagData[] = [];

const tagReducer = (state = initialState, action: TagReducerAction) => {
  switch (action.type) {
    case 'SET_TAGS':
      return action.data;
    case 'UPDATE_TAG':
      return;
    case 'ADD_TAG':
      return state.concat(action.data);
    default:
      return state;
  }
};

export const setTags = (tags: TagData[]): { type: string; data: TagData[] } => {
  return {
    type: 'SET_TAGS',
    data: tags,
  };
};

export const updateTag = (tag: TagData): { type: string; data: TagData } => {
  return {
    type: 'UPDATE_TAG',
    data: tag,
  };
};

export const addTag = (tag: TagData): { type: string; data: TagData } => {
  return {
    type: 'ADD_TAG',
    data: tag,
  };
};

export default tagReducer;
