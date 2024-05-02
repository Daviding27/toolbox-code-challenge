// Splits a CSV data line into an array and extracts the text, number, and hex values.
const normalizeLineArray = (data) => {
  return data.map((dataLine) => {
    const lineArray = dataLine.split(',');
    return {
      text: lineArray[1],
      number: lineArray[2],
      hex: lineArray[3],
    };
  });
};

// Normalizes CSV data received as an array of arrays into a structured format.
export const normalizeResponseData = (data) => {
  return data.map((csvInfo) => {
    return {
      file: csvInfo[0].split(',')[0],
      lines: normalizeLineArray(csvInfo),
    };
  });
};
