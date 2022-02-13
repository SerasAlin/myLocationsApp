import React from 'react';

import { stringFrom } from '../../utils/utils';

export interface ButtonProperties<Titles> {
  id?: string;
  titles: Titles;
  label: keyof Titles;
  onClick?: () => void;
}
export function Button<Title>({ id, titles, label }: ButtonProperties<Title>) {
  return <button id={id}>{stringFrom(titles, label)}</button>;
}
