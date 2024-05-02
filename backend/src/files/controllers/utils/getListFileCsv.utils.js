
// Retrieves CSV data for each name in the provided list of names by making individual requests.
export const getListFileCsv = async (downloadCsv, listNames) => {

  const array = [];
  await Promise.all(
    listNames.map(async (data) => {
      try {
        const csvData = await downloadCsv(data);
       if(csvData) array.push(csvData);
      } catch (err) {
        //  console.log('err ...',err)
      }
    }),
  );
  return array;
};
