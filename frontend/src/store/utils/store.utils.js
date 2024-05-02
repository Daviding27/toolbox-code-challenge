export const getResponseError = (err) => {
  if (err.response) {
    if (err.response.data && err.response.data.errors && Array.isArray(err.response.data.errors)) {
      const errorMessage = err.response.data.errors[0].message ?? 'Error';
      return errorMessage.toString();
    }
    return 'Networwk Error';
  }
  return 'Error';
};

export const normalizeData = (filesArray) => {
  const array = [];
  try {
    const arr = filesArray.map((file) => {
      return file.lines.map((data) => {
        return {
          name: file.file,
          hex: data.hex,
          number: data.number,
          text: data.text,
        };
      });
    });

    arr.map((data) => array.push(...data));
    return array;
  } catch (err) {
    return [];
  }
};
