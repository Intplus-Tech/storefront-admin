import * as React from "react";
const BlueBarChart = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={50}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h78v50H0z" />
    <rect
      width={11.068}
      height={15.625}
      x={0.526}
      y={34.375}
      fill="#D9E4FF"
      rx={4}
    />
    <rect width={11.068} height={25} x={13.703} y={25} fill="#D9E4FF" rx={4} />
    <rect
      width={11.068}
      height={41.25}
      x={26.878}
      y={8.749}
      fill="#1E5EFF"
      rx={4}
    />
    <rect
      width={11.068}
      height={30.625}
      x={40.055}
      y={19.375}
      fill="#D9E4FF"
      rx={4}
    />
    <rect
      width={11.068}
      height={35.625}
      x={53.23}
      y={14.375}
      fill="#D9E4FF"
      rx={4}
    />
    <rect width={11.068} height={25} x={66.405} y={25} fill="#D9E4FF" rx={4} />
  </svg>
);
export default BlueBarChart;
