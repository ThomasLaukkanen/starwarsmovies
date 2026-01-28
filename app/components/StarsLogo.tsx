export default function StarsLogo({ size = 24 }: { size?: number }) {
  return (
    <img
      src="/star-wars.svg"
      alt="Star Wars Logo"
      width={size}
      height={size}
      className="object-contain dark:invert dark:brightness-0 dark:contrast-200"
      style={{ width: size, height: size }}
    />
  );
}
