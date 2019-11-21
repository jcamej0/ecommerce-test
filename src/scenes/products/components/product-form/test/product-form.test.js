import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ProductForm from '../ProductForm';


test('product form render correctly', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<ProductForm />);
		const result = renderer.getRenderOutput();
		expect(result).toMatchSnapshot();
});