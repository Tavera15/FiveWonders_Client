import React from 'react';
import SizeChartMaker from '../../../Components/Makers/SizeChartMaker';

function CreateSizeChart()
{
    return(
        <div className="base-page">
            <h1>Create Size Chart</h1>
            <SizeChartMaker btnText="Create Chart" />
        </div>
    );
}

export default CreateSizeChart;