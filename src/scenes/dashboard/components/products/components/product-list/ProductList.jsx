import React from 'react';
import Table from '../../../../../../components/table';

const ProductList = ({products, handleDelete, handleEdit}) => {
    return (
        <React.Fragment>
            <Table itemList={products} handleDelete={handleDelete} handleEdit={handleEdit}/>
        </React.Fragment>
    )
};

export default ProductList;