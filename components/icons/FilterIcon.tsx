import {SVGProps} from "react"

const FilterIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 19V12.6537L4.95 5H19.05L13 12.6537V19H11ZM12 12.3L16.95 6H7.05L12 12.3Z"
      fill="currentColor"
    />
  </svg>
)

export default FilterIcon
