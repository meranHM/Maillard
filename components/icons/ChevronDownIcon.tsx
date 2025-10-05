import { SVGProps } from "react"

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  color?: string
}

const ChevronDownIcon: React.FC<IconProps> = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2079_3815"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2079_3815)">
        <path d="M12 14.3077L8.19226 10.5H15.8078L12 14.3077Z" fill={color} />
      </g>
    </svg>
  )
}

export default ChevronDownIcon
