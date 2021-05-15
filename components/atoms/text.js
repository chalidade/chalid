export default function text({
  value,
  color,
  margin,
  size,
  weight,
  marginTop,
  onClick,
}) {
  return (
    <p
      onClick={onClick}
      style={{
        color: color,
        margin: margin,
        marginTop: marginTop,
        fontSize: size,
        fontWeight: weight,
      }}
    >
      {value}
    </p>
  );
}
