import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="8" y="5" rx="10" ry="10" width="150" height="91" /> 
    <rect x="8" y="115" rx="0" ry="0" width="150" height="15" /> 
    <rect x="8" y="150" rx="0" ry="0" width="93" height="15" /> 
    <rect x="8" y="180" rx="8" ry="8" width="80" height="24" /> 
    <rect x="128" y="175" rx="7" ry="7" width="32" height="32" />
  </ContentLoader>
)

export default MyLoader
