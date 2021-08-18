import React from 'react';
import {Button} from 'react-bootstrap';

function CategoryMaker(props)
{
    return(
        <div>
            <div>

            </div>

            <div className="m-auto col-md-6">
                <div className="form-group">
                    <label htmlFor="categoryName">Category Name</label>
                    <input required type="text" className="form-control" id="categoryName" />
                </div>

                <div className="form-group">
                    <label htmlFor="categoryUrl">Category URL Name</label>
                    <input required className="form-control" id="categoryUrl" />
                </div>

                <div className="form-group">
                    <label htmlFor="categoryImage">Banner Image</label>
                    <input required type="file" accept="image/png" className="form-control" id="categoryImage" />
                </div>

                < hr />

                <Button type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>

            </div>
        </div>
    );
}

export default CategoryMaker;