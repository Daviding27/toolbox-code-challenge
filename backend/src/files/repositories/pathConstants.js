export const allFilesPath = '/v1/secret/files';

export const downloadFilePath = (fileName) => {
  return `/v1/secret/file/${fileName}`;
};
