import { shallow } from 'enzyme';

import { enzymeSetup } from '../../../enzymeAdapterSetup';
import { ButtonTitleValue } from '../buttonTitleValue/buttonTitleValue';
import { Button } from './button';

enzymeSetup();

const titles = { someTitle: 'TheTitle' };
const values = { someValue: 'TheValue' };

describe('Button', () => {
  it('should render', () => {
    const button = shallow(<Button titles={titles} label="someTitle" />);
    expect(button.text()).toBe('TheTitle');
  });

  it('should have an id if specified', () => {
    const button = shallow(
      <Button id="someId" titles={titles} label="someTitle" />
    );
    expect(button.props().id).toBe('someId');
  });
});
describe('ButtonTitleValue', () => {
  it('should render', () => {
    const button = shallow(
      <ButtonTitleValue
        titles={titles}
        titleLabel="someTitle"
        values={values}
        valueLabel="someValue"
      />
    );
    expect(button.text()).toBe('TheTitle:TheValue');
  });

  it('should have an id if specified', () => {
    const button = shallow(
      <ButtonTitleValue
        id="someId"
        titles={titles}
        titleLabel="someTitle"
        values={values}
        valueLabel="someValue"
      />
    );
    expect(button.props().id).toBe('someId');
  });
});
