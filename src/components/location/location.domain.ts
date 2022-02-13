import { CategoryDomain } from '../category/category.domain';

export interface LocationDomain {
  name: string;
  address: string;
  coordinates: string[];
  category: CategoryDomain;
  id?: number;
}
