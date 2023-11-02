import { useEffect, useState } from "react";

export default function Product() {

  const [products, setProducts] = useState([]);
  const [checked,setChecked] = useState(false) // 체크박스 이벤트 상태 저장

  const handleChange = (event)=>setChecked(!checked);

  //useEffect() -- 최초 한번만 fetch 실행 안쓸시 fetch  무한루프 실행
  useEffect(()=>{
    fetch(`data/${checked ? 'sale_products.json' : 'products.json'} `)
    .then((res) => res.json())
    .then(data => {
      setProducts(data)
    })
    .catch(()=>{console.log('error')});

    return(()=>{
      console.log('패치후 정리해야하는 청소작업 진행');
    })
  },[checked]);


  return (
    <>
      <h1>show products!!!</h1>
      <input type="checkbox" id="checkbox" onChange={handleChange} />
      <label htmlFor="checkbox">show only sale !!</label>
      <ul>
        {
          products.map((product) =>
            <li key ={product.id}>
              <h3>name : {product.name}</h3>
              <h3>price : {product.price}</h3>
              <h3>id : {product.id}</h3>
            </li>
          )
        }
      </ul>
    </>
  );
}