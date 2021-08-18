import React from 'react';
import {Button} from 'react-bootstrap';

function SubCategoryMaker(props)
{
    return(
        <div>
            <div>

            </div>

            <div className="m-auto col-md-6">
                <div className="form-group">
                    <label htmlFor="subcategoryName">Category Name</label>
                    <input required type="text" className="form-control" id="subcategoryName" />
                </div>

                <div className="form-group">
                    <label htmlFor="subcategoryUrl">Category URL Name</label>
                    <input required className="form-control" id="subcategoryUrl" />
                </div>

                <div className="form-group">
                    <label htmlFor="subcategoryImage">Banner Image</label>
                    <input required type="file" accept="image/png" className="form-control" id="subcategoryImage" />
                </div>

                < hr />

                <Button type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">{props.btnText}</h4></Button>

            </div>
        </div>
    );
}

export default SubCategoryMaker;