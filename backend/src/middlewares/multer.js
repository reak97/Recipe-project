const multer = require('multer'); 
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
          const destinationFolder = file.fieldname === 'avatar' 
          ? '../../public/images/users' 
          : '../../public/images/recipes';
      console.log('Destination Folder:', path.join(__dirname, destinationFolder));
      cb(null, path.join(__dirname, destinationFolder));
  },
  filename: (req, file, cb) => {
      cb(
          null,
          file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      );
  },
});

const upload = multer({
    storage: storage,
});

module.exports = upload;