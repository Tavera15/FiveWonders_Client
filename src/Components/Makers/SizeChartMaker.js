import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import "./CSS/SizeChartMaker.css"

function SizeChartMaker(props)
{
    const sizeInput = useState("");
    const chartSizes = useState([]);

    return(
        <div>
            <div className="m-auto col-xl-6 col-md-10">

                <div className="form-group">
                    <label htmlFor="chartName">Size Chart Name</label>
                    <input required type="text" className="form-control" id="chartName" placeholder="Ex. T-Shirts" />
                </div>

                <div>
                    <label htmlFor="chartName">Size Chart Image</label>
                    <input required className="form-control" type="file" accept="image/png" />
                </div>

                <div className="mt-4 mb-4 chart-box">
                    <h3>Sizes Added</h3>
                    <hr />

                    <div className="chart-sizes-added mt-4">
                        
                        <div className="chart-solo-slot mb-4">
                            <h4>XL</h4>
                            <Button variant="danger">Remove</Button>
                        </div>
                        <div className="chart-solo-slot mb-4">
                            <h4>XL</h4>
                            <Button variant="danger">Remove</Button>
                        </div><div className="chart-solo-slot mb-4">
                            <h4>XL</h4>
                            <Button variant="danger">Remove</Button>
                        </div><div className="chart-solo-slot mb-4">
                            <h4>XL</h4>
                            <Button variant="danger">Remove</Button>
                        </div><div className="chart-solo-slot mb-4">
                            <h4>XL</h4>
                            <Button variant="danger">Remove</Button>
                        </div>
                    </div>

                    <div className="chart-input">
                        <input className="form-control mt-4 mb-2" placeholder="Ex. XL" />
                        <Button variant="primary">New Size</Button>
                    </div>
                </div>

                <Button type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>

            </div>
        </div>
    );
}

export default SizeChartMaker;