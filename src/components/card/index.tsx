import React, { createContext } from 'react';
import { CardTypes } from '../../services/api/globals';
import { LocationDomain } from '../location/location.domain';
import { CategoryDomain } from '../category/category.domain';

export interface CardContextProps extends Partial<CardContainerProps> {
  selectedCard?: boolean;
}

export interface CardContainerProps {
  children?: JSX.Element;
  disabled?: boolean;
  contentProps?: CardContainerContentProps;
  handleClick?: () => any;
  handleCardSelectionAction?: () => void;
  selectedCard?: boolean;
}

export interface CardContainerContentProps {
  id?: number;
  cardType: CardTypes
  data: LocationDomain | CategoryDomain
}

export const CardContext = createContext<CardContextProps | null>(null);

const CardContextWrapper = ({ contentProps, selectedCard, handleCardSelectionAction, handleClick, children, disabled }: CardContainerProps): JSX.Element => {
  return (
    <CardContext.Provider value={{ contentProps, selectedCard, handleCardSelectionAction, handleClick, disabled }}>{children}</CardContext.Provider>
  );
};

export default CardContextWrapper;
