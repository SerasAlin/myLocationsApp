import { Interaction, InteractionObject } from '@pact-foundation/pact';
import { pactWith } from 'jest-pact';

import { allLocationsSample } from './components/location/locations.sample';

const runningPeriod = 1000 * 60 * 60;
jest.setTimeout(runningPeriod);

type AddInteraction = (
  path: string,
  body: any,
  method?: any,
  query?: any
) => InteractionObject | Interaction;
const addInteraction: AddInteraction = (path, body, query, method = 'GET') => ({
  state: '',
  uponReceiving: '',
  withRequest: { method, path, query },
  willRespondWith: { status: 200, body },
});

const interactions = (provider: any) => {
  provider.addInteraction(addInteraction('/get-locations', allLocationsSample));
};

pactWith(
  {
    consumer: 'consumer',
    provider: 'provider',
    cors: true,
    port: 8080,
    timeout: runningPeriod,
  },
  (provider) => {
    let killProvider: any;
    // @ts-ignore
    beforeAll(async () => {
      interactions(provider);
      // @ts-ignore
      // eslint-disable-next-line no-promise-executor-return,no-return-assign
      await new Promise((res) => (killProvider = res));
    });
    afterAll(() => killProvider());
    it('', () => {
      expect(1).toBe(1);
    });
  }
);
