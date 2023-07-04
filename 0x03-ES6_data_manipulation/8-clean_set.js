export default function cleanSet(set, startString) {
  const valuesArray = Array.from(set);
  const filteredValues = valuesArray.filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));

  return cleanedValues.join('-');
}
