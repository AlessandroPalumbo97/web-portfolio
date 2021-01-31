import React from "react";

const MainLayout = (props) => {
  const {children} = props
  return (
    <div>
      <h1> CIAO </h1>
      {children}
    </div>
  )
}

export default MainLayout
