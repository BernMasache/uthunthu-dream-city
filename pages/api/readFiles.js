// import fs from 'fs'
// import path from 'path'

// export default (req, res) => {
//   const dirRelativeToPublicFolder = 'assets/pack_1'

//   const dir = path.resolve('./public', dirRelativeToPublicFolder);

//   const filenames = fs.readdirSync(dir);

//   const images = filenames.map(name => path.join('/', dirRelativeToPublicFolder, name))

//   res.statusCode = 200
//   res.json(images);
// }