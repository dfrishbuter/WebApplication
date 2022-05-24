{
  mode: 'production',
  resolve: {
    modules: [
      '/Users/d.frishbuter/IdeaProjects/NewWebApplication/client/build/js/packages/client/kotlin-dce',
      'node_modules'
    ]
  },
  plugins: [
    ProgressPlugin {
      profile: false,
      handler: [Function: handler],
      modulesCount: 5000,
      dependenciesCount: 10000,
      showEntries: true,
      showModules: true,
      showDependencies: true,
      showActiveModules: false,
      percentBy: undefined
    },
    TeamCityErrorPlugin {}
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'source-map-loader'
        ],
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {}
          },
          {
            loader: 'css-loader',
            options: {}
          }
        ]
      }
    ]
  },
  entry: {
    main: [
      '/Users/d.frishbuter/IdeaProjects/NewWebApplication/client/build/js/packages/client/kotlin-dce/client.js'
    ]
  },
  output: {
    path: '/Users/d.frishbuter/IdeaProjects/NewWebApplication/client/build/distributions',
    filename: [Function: filename],
    library: 'client',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  devtool: 'source-map',
  ignoreWarnings: [
    /Failed to parse source map/
  ],
  stats: {
    warnings: false,
    errors: false
  }
}