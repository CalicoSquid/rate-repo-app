export const formatNumber = (count) => {
  if (count > 999) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};
