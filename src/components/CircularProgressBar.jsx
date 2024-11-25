const CircularProgressBar = ({
  percent = 0,
  size = 3,
  strokeWidth = 0.25,
  strokeColor = "green",
}) => {
  const radius = size / 2 - strokeWidth;

  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          strokeWidth={`${strokeWidth}vw`}
          stroke="white"
        />
        <circle
          r={`${radius}vw`}
          cx={`${size / 2}vw`}
          cy={`${size / 2}vw`}
          strokeWidth={`${strokeWidth}vw`}
          stroke={strokeColor}
          fill="none"
          strokeDasharray={`${2 * radius * Math.PI}vw`} //Chu Vi: 2*PI*R = 2*20*3.14=125.65
          strokeDashoffset={`${2 * radius * Math.PI - (percent / 100) * 2 * radius * Math.PI}vw`} // Phần không tô xanh
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
        />
        <text
          x={`${size / 2}vw`}
          y={`${size / 2}vw`}
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
