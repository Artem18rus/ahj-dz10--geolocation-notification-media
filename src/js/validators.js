export default function isValidInn(value) {
  // console.log('валидатор тут')
  return /^\[?(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?),(\s?)(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)\]?$/.test(value);
}
