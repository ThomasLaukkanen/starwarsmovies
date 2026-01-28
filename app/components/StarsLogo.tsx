export default function StarsLogo({ size = 24 }: { size?: number }) {
  return (
    <img
      src="/star-wars.svg"
      alt="Star Wars Logo"
      width={size}
      height={size}
      className="object-contain"
      style={{ width: size, height: size }}
    />
  );
}
