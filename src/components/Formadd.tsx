import { useState } from "react";
import { addProducts } from "../actions/product";
import { useAppDispatch } from "../app/hook";

const AddProductForm = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc,setProductDesc] = useState('');
    const dispatch = useAppDispatch()
    const handleProductNameChange = (event:any) => {
      setProductName(event.target.value);
    };
  
    const handleProductPriceChange = (event:any) => {
      setProductPrice(event.target.value);
    };
    const handleProductDescChange = (event:any) => {
        setProductDesc(event.target.value);
      };
  
    const handleSubmit = (event:any) => {
      if(!productName || productName.length<6){
        alert("Bạn thiếu tên và kí tự quá ngắn.")
        return
      }
      if(!productPrice ){
        alert("Bạn thiếu giá.")
        return
      }
      if(!productDesc ){
        alert("Bạn thiếu mô tả.")
        return
      }
        event.preventDefault();
      dispatch(addProducts({ name: productName, price: productPrice,desc: productDesc}));
      setProductName('');
      setProductPrice('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Tên sản phẩm:
          <input type="text" value={productName} onChange={handleProductNameChange} />
        </label>
        <br />
        <label>
          Giá sản phẩm:
          <input type="text" value={productPrice} onChange={handleProductPriceChange} />
        </label>
        <label>
          Mô Tả:
          <input type="text" value={productDesc} onChange={handleProductDescChange} />
        </label>
        <br />
        <button type="submit">Thêm sản phẩm</button>
      </form>
    );
  };

  export default AddProductForm
  