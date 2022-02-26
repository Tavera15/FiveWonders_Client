import React from 'react';
import CategoryMaker from '../../../Components/Makers/CategoryMaker';

function CreateCategory()
{
    return(
        <div className="">
            <h1>Create Category</h1>
            <CategoryMaker btnText="Create Category" />
        </div>
    )
}

export default CreateCategory;