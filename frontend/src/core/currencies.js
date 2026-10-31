// The only currencies the profile picker offers. Label only — a default for new
// assets and a display hint. No conversion: existing amounts keep whatever
// currency they were saved with.
export const CURRENCIES = [
  ['INR', '₹', 'Indian Rupee'], ['USD', '$', 'US Dollar'], ['EUR', '€', 'Euro'],
  ['GBP', '£', 'British Pound'], ['AUD', 'A$', 'Australian Dollar'], ['CAD', 'C$', 'Canadian Dollar'],
  ['SGD', 'S$', 'Singapore Dollar'], ['AED', 'AED', 'UAE Dirham'], ['JPY', '¥', 'Japanese Yen'],
  ['CNY', '¥', 'Chinese Yuan'],
]

export const currencySymbol = (code = 'INR') => CURRENCIES.find((c) => c[0] === code)?.[1] || code
