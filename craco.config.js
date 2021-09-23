

  

 const CracoLessPlugin = require('craco-less-plugin')
 
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: {
          hack: `true;@import "${require.resolve('./src/styles/theme.less')}";`
        },
        javascriptEnabled: true
      }
    }
  ]
}


// const CracoLessPlugin = require('craco-less');
// const path = require('path')

// module.exports = {
//     plugins: [
//       {
//         plugin: CracoLessPlugin,
//         options: {
//            customizeThemeLessPath: path.join(__dirname, "src/styles/theme.less"),
//             lessLoaderOptions: {
//              lessOptions: {
//               javascriptEnabled: true,
//             },
//           },

//         },
//       },
//     ],
//   };
