import React from 'react'
import ProductData from "./ProductData";
import ReactDOM from "react-dom";
import Card from './Card'

function App() {
  return (
    <div className='m-5'>
      <div style={{ textAlign: 'center', fontSize: '40px', fontWeight: "bold" }}>Spring Collection</div>
      <div className="row m-5">
        {ProductData.map((product, i) => (
          <div key={i} className="col-sm-12 col-md-8 col-lg-4 d-flex align-items-stretch">
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App
