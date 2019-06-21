//////////////// CHAI
import { expect } from 'chai';

global.expect = expect;


//////////////// ENZYME
import { mount, render, shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
global.mount = mount;
global.render = render;
global.shallow = shallow;