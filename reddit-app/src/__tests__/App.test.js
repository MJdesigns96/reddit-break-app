import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import { Post } from '../components/Navbar/content-reel/post/posts';

configure({ adapter: new Adapter() });

it("renders a title", () => {
  const wrapper = shallow(
    <App />
  );
  expect(wrapper).toMatchSnapshot();
});

describe ('<Post />', () => {
  it ('renders a h3', () => {
    const wrapper = shallow(<Post />)
    console.log(wrapper.debug())
    expect(wrapper).toMatchSnapshot()
  })
})