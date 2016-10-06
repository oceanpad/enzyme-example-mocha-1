import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo2 from '../src/Foo2';

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Foo2 />).containsAllMatchingElements(<button>)).to.equal(false);
  });
});
