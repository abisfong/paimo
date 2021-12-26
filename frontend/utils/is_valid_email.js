export default function isValidEmail(input) {
  return /\w+@\w+\.\w+/.test(input);
}