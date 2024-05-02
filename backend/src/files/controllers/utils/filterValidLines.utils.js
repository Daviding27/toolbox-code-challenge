
// Filters out lines from the provided list of CSV data that meet specific conditions.
// Only lines with valid data matching the defined criteria are included in the result.

export const filterValidLines = (listFileCsv) => {

  const regex = /^[0-9a-fA-F]{32}$/;

  const arrayFiltered = [];
  listFileCsv.map((data) => {
    const lines = data.split('\n');
    const array = [];

    if (lines[0] == 'file,text,number,hex') {
      lines.shift();

      lines.map(async (line) => {

        
        const dataLine = line.split(',');
        if (
          dataLine.length == 4 &&
          dataLine[0].split('.')[1] == 'csv' &&
          typeof dataLine[1] == 'string' &&
          !isNaN(+dataLine[2]) &&
          typeof +dataLine[2] == 'number' &&
          regex.test(dataLine[3])
        ){
          array.push(line);
        }
         
      });
    }
    if (array.length > 0) arrayFiltered.push(array);
  });
  return arrayFiltered;
};
