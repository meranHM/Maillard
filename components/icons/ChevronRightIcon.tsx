import { SVGProps } from "react"

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_2079_3778"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_2079_3778)">
        <path
          d="M13.2923 12L8.69225 7.40001L9.4 6.69226L14.7078 12L9.4 17.3078L8.69225 16.6L13.2923 12Z"
          fill="currentColor"
        />
      </g>
    </svg>
  )
}
