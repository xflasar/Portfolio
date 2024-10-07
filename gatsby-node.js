exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop") {
    actions.setWebpackConfig({
      devtool: false,
      watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`
                  implementation: require("sass"),
                  sassOptions: {
                    outputStyle: "compressed",
                  },
                },
              },
            ],
          },
        ],
      },
    });
  }
};
