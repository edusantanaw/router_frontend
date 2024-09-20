export default (value: string) => {
  value = value.replace(/\D/g, "");
  if (value.length > 8) value = value.slice(0, 8);
  if (value.length >= 5) {
    value = value.replace(/(\d{2})(\d{2})(\d{0,4})/, "$1/$2/$3");
  } else if (value.length >= 3) {
    value = value.replace(/(\d{2})(\d{0,2})/, "$1/$2");
  }
  return value;
};
