import React from 'react';
import ProductMaker from '../../../Components/Makers/ProductMaker';

function CreateItem()
{
    return(
        <div className="">
            <h1>Create Item</h1>
            <ProductMaker btnText="Create" />
        </div>
    );
}

export default CreateItem;