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
          +dataLine[2] != isNaN &&
          regex.test(dataLine[3])
        )
          array.push(line);
      });
    }
    if (array.length > 0) arrayFiltered.push(array);
  });
  return arrayFiltered;
};
