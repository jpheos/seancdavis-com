import React from "react"
import PropTypes from "prop-types"

const Logo = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.9999 62" className={className}>
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
  </svg>
)

Logo.propTypes = {
  /**
   * CSS class passed onto the wrapping (SVG) element.
   */
  className: PropTypes.string
}

Logo.defaultProps = {}

export default Logo
