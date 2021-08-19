import React from 'react';
import SubCategoryMaker from '../../../Components/Makers/SubCategoryMaker';

function CreateSubCategory()
{
    return(
        <div className="base-page">
            <h1>Create Sub-Category</h1>
            <SubCategoryMaker btnText="Create Sub-Category" />
        </div>
    )
}

export default CreateSubCategory;