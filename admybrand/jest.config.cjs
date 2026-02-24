module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "ecmascript",
            jsx: true
          },
          transform: {
            react: {
              runtime: "automatic"
            }
          }
        }
      }
    ]
  },

  moduleNameMapper: {
    "\\.(css|scss|png|jpg|svg)$": "identity-obj-proxy"
  },
};