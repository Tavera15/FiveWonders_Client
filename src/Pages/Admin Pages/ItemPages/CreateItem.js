import React from 'react';
import ProductMaker from '../../../Components/Makers/ProductMaker';

function CreateItem()
{
    return(
        <div className="">
            <h1>Create Item Page</h1>
            <ProductMaker btnText="Create" />
        </div>
    );
}

export default CreateItem;