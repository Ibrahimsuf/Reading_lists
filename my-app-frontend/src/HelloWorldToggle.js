import React, { useState } from 'react';

function HelloWorldToggle() {
  const [isHelloMom, setIsHelloMom] = useState(false);

  function handleClick() {
    setIsHelloMom(!isHelloMom);
  }

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">{isHelloMom ? 'Hello Bot' : 'Hello World'}</h1>
          <button className="btn btn-primary btn-block" onClick={handleClick}>Toggle</button>
        </div>
      </div>
    </div>
  );
}

export default HelloWorldToggle;
