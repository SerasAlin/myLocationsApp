import { LocationDomain } from '../../../../components/location/location.domain';
import { request } from '../../api.helpers';
import { BASE_URL } from '../../globals';

export const getLocations = (): Promise<LocationDomain[]> => {
  return request(`${BASE_URL}/get-locations`, 'GET');
};

export const updateLocationById = (
  payload: LocationDomain
): Promise<LocationDomain> => {
  return request(`${BASE_URL}/update-location`, 'PUT', payload);
};

export const addLocation = (
  payload: LocationDomain
): Promise<LocationDomain> => {
  return request(`${BASE_URL}/add-location`, 'PUT', payload);
};
