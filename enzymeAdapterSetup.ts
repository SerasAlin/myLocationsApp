// eslint-disable-next-line import/no-extraneous-dependencies
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';

export function enzymeSetup() {
  configure({ adapter: new Adapter() });
}
