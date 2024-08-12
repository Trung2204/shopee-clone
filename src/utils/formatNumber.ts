export const formatNumber = (value: string): string => {
    return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

export const unformatNumber = (formattedValue: string): string => {
  // Remove all periods from the formatted string
  return formattedValue.replace(/\./g, "");
};