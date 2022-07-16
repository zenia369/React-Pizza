
import React from "react"
import ContentLoader from "react-content-loader"

const FilterLoader = ({length, width = 650, itemWidth = 80, x}) => (
  <ContentLoader 
    speed={2}
    width={width}
    height={50}
    viewBox={`0 0 ${width} 50`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    {
        [...Array(length)].map((el, i) => {
            return <rect key={i+length} x={x? x : i * 100} y="5" rx="15" ry="15" width={itemWidth} height="40" />
        })
    }

  </ContentLoader>
)

export default FilterLoader