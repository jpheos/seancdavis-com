import React from "react"
import PropTypes from "prop-types"

const LogoWhite = () => (
  <>
    <path
      fill="#FFFFFF"
      style={{ fillOpacity: "0.5" }}
      d="M36.6,21.2l3.7,9.8c1.8,4.8-1.8,10-6.9,10H24c-0.9,0-1.7-0.1-2.6-0.2L29,61h4.5c10.8,0,20.1-8.4,20.5-19.3
	C54.4,31.2,46.6,22.5,36.6,21.2z"
    />
    <path
      fill="#FFFFFF"
      style={{ fillOpacity: "0.3" }}
      d="M24.7,21H34c0.9,0,1.7,0.1,2.6,0.2L29,1h-4.5C13.6,1,4.4,9.4,4,20.3c-0.4,10.5,7.4,19.3,17.4,20.5L17.8,31
	C15.9,26.2,19.5,21,24.7,21z"
    />
    <path
      fill="#FFFFFF"
      style={{ fillOpacity: "0.75" }}
      d="M33.3,41c5.2,0,8.8-5.2,6.9-10l-3.7-9.8C35.7,21.1,34.9,21,34,21h-9.3c-5.2,0-8.8,5.2-6.9,10l3.7,9.8
	c0.8,0.1,1.7,0.2,2.6,0.2H33.3z"
    />
    <circle fill="#FFFFFF" style={{ fillOpacity: "0.5" }} cx="11" cy="51" r="10" />
    <circle fill="#FFFFFF" style={{ fillOpacity: "0.3" }} cx="47" cy="11" r="10" />
  </>
)

const LogoDefault = () => (
  <>
    <path
      fill="#2ab6cc"
      d="M36.5683,21.1826l3.6774,9.8061A7.41,7.41,0,0,1,33.3078,41H24a20.0709,20.0709,0,0,1-2.5684-.1826L29,61h4.5207c10.8446,0,20.081-8.4328,20.4663-19.2706A19.99,19.99,0,0,0,36.5683,21.1826Z"
    />
    <path
      fill="#83c6ae"
      d="M24.6921,21H34a20.0709,20.0709,0,0,1,2.5684.1826L29,1H24.4793C13.6347,1,4.3984,9.4328,4.013,20.2706A19.99,19.99,0,0,0,21.4315,40.8174l-3.6773-9.8061A7.41,7.41,0,0,1,24.6921,21Z"
    />
    <path
      fill="#2a7c7c"
      d="M33.3078,41a7.41,7.41,0,0,0,6.9379-10.0113l-3.6774-9.8061A20.0709,20.0709,0,0,0,34,21H24.6921a7.41,7.41,0,0,0-6.9379,10.0113l3.6773,9.8061A20.0709,20.0709,0,0,0,24,41Z"
    />
    <circle fill="#2ab6cc" cx="11" cy="51" r="10" />
    <circle fill="#83c6ae" cx="46.9999" cy="11" r="10" />
  </>
)

const Logo = ({ className, theme }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.9999 62" className={className}>
    {theme === "white" ? <LogoWhite /> : <LogoDefault />}
  </svg>
)

Logo.propTypes = {
  /**
   * CSS class passed onto the wrapping (SVG) element.
   */
  className: PropTypes.string,
  /**
   * Controls the color and style of the logo.
   */
  theme: PropTypes.oneOf(["default", "white"])
}

Logo.defaultProps = {}

export default Logo