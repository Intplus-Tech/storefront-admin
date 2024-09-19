import * as React from "react";
const YellowBarChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={79}
    height={50}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path fill="#fff" d="M0-15h78v80H0z" />
      <rect
        width={11.085}
        height={15.625}
        x={0.528}
        y={34.375}
        fill="#FFF4C9"
        rx={4}
      />
      <rect
        width={11.085}
        height={25}
        x={53.315}
        y={25}
        fill="#FFF4C9"
        rx={4}
      />
      <rect
        width={11.085}
        height={41.25}
        x={40.118}
        y={8.75}
        fill="#FFC700"
        rx={4}
      />
      <rect
        width={11.085}
        height={30.625}
        x={66.512}
        y={19.375}
        fill="#FFF4C9"
        rx={4}
      />
      <rect
        width={11.085}
        height={35.625}
        x={26.922}
        y={14.375}
        fill="#FFF4C9"
        rx={4}
      />
      <rect
        width={11.085}
        height={25}
        x={13.725}
        y={25}
        fill="#FFF4C9"
        rx={4}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h78.125v50H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default YellowBarChart;
