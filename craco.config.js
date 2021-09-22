const CracoLessPlugin = require('craco-less');
const path = require('path')

module.exports = {
    plugins: [
      {
        plugin: CracoLessPlugin,
        options: {
           customizeThemeLessPath: path.join(__dirname, "src/styles/theme.less")
        //        lessLoaderOptions: {
        //      lessOptions: {
        //       modifyVars: { '@primary-color': "red"},
        //       javascriptEnabled: true,
        //     },
        //   },

        },
      },
    ],
  };


   //   lessLoaderOptions: {
        //     lessOptions: {
        //       modifyVars: { '@primary-color': '#1DA57A' },
        //       javascriptEnabled: true,
        //     },
        //   },