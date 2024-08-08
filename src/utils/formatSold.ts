export function formatSold(sold: number) {
  if (sold >= 1000) {
    const thousands = (sold / 1000).toFixed(1); // Convert to x.x format
    const formatted = thousands.replace('.', ','); // Replace dot with comma
    return `${formatted}k`;
  }
  return sold.toString(); // No formatting needed for smaller values
}