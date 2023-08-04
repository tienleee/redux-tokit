

import { deleteProducts, fetcthProducts, updateProducts } from "../actions/product";
import { useAppDispatch, useAppSelector } from "../app/hook";

// import { add } from "@/slices/Cart";
import { useEffect } from "react";
const List = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state: any) => state.products);
  useEffect(() => {
    dispatch(fetcthProducts());
  }, []);

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <div className="panel">
            <div className="panel-heading">
              <div className="row">
                <div className="col-sm-12 col-xs-12">
                  <a href="/admin/product/add"
                    className="border bg-blue-500 p-2"
                  >
                    Add Product
                  </a>
                </div>
              </div>
            </div>
            <div className="panel-body table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Desc</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((item: any, index: any) => {
                    return (
                      <tr key={item.id}>
                       
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <p>{item.desc}</p>
                        </td>
                        <td>
                          <ul className="action-list">
                         
                              <button
                                className="border bg-blue-500 p-2"
                                onClick={() =>
                                  dispatch(
                                    updateProducts({
                                      name: "test updated",
                                      id: 4,
                                      price:400,
                                      desc:"string"
                                    })
                                  )
                                }
                              >
                                Update Product
                              </button>
                           
                              <button
                                className="border bg-blue-500 p-2"
                                onClick={() => dispatch(deleteProducts(item.id))}
                              >
                                Delete Product
                              </button>
                            
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default List;
