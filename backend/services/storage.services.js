const ImageKit = require("@imagekit/nodejs");
const dotenv = require("dotenv");
dotenv.config();
const { toFile } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (fileBuffer, filename) => {
  const response = await client.files.upload({
    file: await toFile(fileBuffer, filename),
    fileName: filename,
  });

  return response;
};

module.exports = { uploadFile };
