const resolvableExtensions = () => [`.ts`, `.tsx`]

function onCreateWebpackConfig({ stage, actions }, pluginOptions) {

  const test = pluginOptions.test || /\.tsx?$/;
  const exclude = pluginOptions.exclude || /(node_modules|cache|public)/;
  
  if (stage === "develop") {
    actions.setWebpackConfig({
      module: {
        rules: [{
          test: test,
          exclude: exclude,
          use: [{
            loader: 'tslint-loader'
          }]
        }]
      }
    });
  }
}

exports.resolvableExtensions = resolvableExtensions;
exports.onCreateWebpackConfig = onCreateWebpackConfig;
