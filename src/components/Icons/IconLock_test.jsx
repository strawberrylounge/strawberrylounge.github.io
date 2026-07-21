function IconLock({ size = 24, color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M19,8V7.151a7,7,0,0,0-14,0V8H2V21a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8ZM8,7.151a4,4,0,0,1,8,0V8H8ZM5,21V11H19l0,10Z" />
      <rect x="10" y="14" width="4" height="3" />
    </svg>
  );
}

export default IconLock;
