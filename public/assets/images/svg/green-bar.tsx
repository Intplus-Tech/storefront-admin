import * as React from "react";
const GreenBarChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={71}
    height={50}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="M0-15h71v80H0z" />
      <rect
        width={10.074}
        height={15.625}
        x={0.48}
        y={34.375}
        fill="#C4F8E2"
        rx={4}
      />
      <rect
        width={10.074}
        height={25}
        x={36.459}
        y={25}
        fill="#C4F8E2"
        rx={4}
      />
      <rect
        width={10.074}
        height={41.25}
        x={48.453}
        y={8.75}
        fill="#1FD286"
        rx={4}
      />
      <rect
        width={10.074}
        height={30.625}
        x={12.473}
        y={19.375}
        fill="#C4F8E2"
        rx={4}
      />
      <rect
        width={10.074}
        height={35.625}
        x={24.466}
        y={14.375}
        fill="#C4F8E2"
        rx={4}
      />
      <rect
        width={10.074}
        height={25}
        x={60.446}
        y={25}
        fill="#C4F8E2"
        rx={4}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h71v50H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default GreenBarChart;
