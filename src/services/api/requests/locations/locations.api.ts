import { LocationDomain } from '../../../../components/location/location.domain';
import { request } from '../../api.helpers';
import { BASE_URL } from '../../globals';

export const getLocations = (): Promise<LocationDomain[]> => {
  return request(`${BASE_URL}/get-locations`, 'GET');
};

export const updateLocationRequest = (
  payload: LocationDomain
): Promise<LocationDomain> => {
  return request(`${BASE_URL}/update-location`, 'PUT', payload);
};

export const addLocationRequest = (
  payload: LocationDomain
): Promise<LocationDomain> => {
  return request(`${BASE_URL}/add-location`, 'POST', payload);
};

export const deleteLocationRequest = (
  payload: number
): Promise<LocationDomain> => {
  return request(`${BASE_URL}/delete-location`, 'DELETE', payload);
};
