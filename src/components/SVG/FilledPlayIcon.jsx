import React from "react";

const FilledPlayIcon = (props) => (
  <svg
    className={`icon ${props.className || ""}`}
    onClick={props.onClick}
    width={56}
    height={56}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={56} height={56} rx={28} fill={props.color} />
    <g clipPath="url(#clip0_1_1517)">
      <path
        d="M22.225 18.2069L37.9633 27.2929C38.0874 27.3647 38.1903 27.4677 38.2619 27.5918C38.3335 27.7159 38.3712 27.8567 38.3712 27.9999C38.3712 28.1432 38.3335 28.284 38.2619 28.4081C38.1903 28.5322 38.0874 28.6352 37.9633 28.7069L22.225 37.7929C22.1009 37.8646 21.9601 37.9023 21.8167 37.9024C21.6734 37.9024 21.5326 37.8647 21.4084 37.793C21.2843 37.7214 21.1812 37.6183 21.1095 37.4942C21.0378 37.3701 21 37.2293 21 37.0859V18.9139C21 18.7706 21.0378 18.6298 21.1095 18.5057C21.1812 18.3816 21.2843 18.2785 21.4084 18.2069C21.5326 18.1352 21.6734 18.0975 21.8167 18.0975C21.9601 18.0975 22.1009 18.1353 22.225 18.2069Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1517">
        <rect
          width={28}
          height={28}
          fill="black"
          transform="translate(14 14)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default FilledPlayIcon;
