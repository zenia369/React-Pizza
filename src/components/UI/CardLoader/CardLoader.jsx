import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="280" rx="0" ry="0" width="260" height="30" /> 
    <circle cx="140" cy="130" r="130" /> 
    <rect x="10" y="330" rx="0" ry="0" width="260" height="30" /> 
    <rect x="10" y="400" rx="0" ry="0" width="70" height="40" /> 
    <rect x="180" y="400" rx="12" ry="12" width="90" height="40" />
  </ContentLoader>
)

export default CardLoader