import { ActionTypes } from '../type';

export default interface ActionConfig {
  type: ActionTypes,
  name: string,
  next?: string,
}