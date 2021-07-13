module.exports = {
  "stories": [ 
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-storysource",
    "@storybook/addon-controls",
  ],
  "typescript": { // https://storybook.js.org/docs/ember/configure/typescript 참고
    "reactDocgen": "react-docgen-typescript",
    "reactDocgenTypescriptOptions": {
      "compilerOptions" : {
        "allowSyntheticDefaultImports" : false,
        "esModuleInterop" : false,
      },
    }
  }
}