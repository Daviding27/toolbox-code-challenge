


export const getListFileCsv = async (downloadCsv, listNames) => {
  const array = [];
  await Promise.all(listNames.map(async (data) => {
    try {
      const csvData = await downloadCsv(data);
      //const validatedLines = filterValidLines(csvData);
     //array.push(validatedLines);
     array.push(csvData)
    } catch (err) {
      //  console.log('err ...',err)
    }
  }));
  return array;
};
