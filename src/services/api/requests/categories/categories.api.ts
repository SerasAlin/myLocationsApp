import { CategoryDomain } from '../../../../components/category/category.domain';
import { request } from '../../api.helpers';
import { BASE_URL } from '../../globals';

export const getCategories = (): Promise<CategoryDomain[]> => {
  return request(`${BASE_URL}/get-categories`, 'GET');
};

export const updateCategoryRequest = (
  payload: CategoryDomain
): Promise<CategoryDomain> => {
  return request(`${BASE_URL}/update-category-name`, 'PUT', payload);
};

export const addCategoryRequest = (
  payload: CategoryDomain
): Promise<CategoryDomain> => {
  return request(`${BASE_URL}/add-category`, 'POST', payload);
};

export const deleteCategoryRequest = (
  payload: number
): Promise<CategoryDomain> => {
  return request(`${BASE_URL}/delete-category`, 'DELETE', payload);
};
