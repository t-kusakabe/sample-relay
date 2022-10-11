module.exports = {
  src: "./src/queries",
  language: "typescript",
  schema: "./src/schema/schema.graphql",
  exclude: ["**/.next/**", "**/node_modules/**", "**/test/**",  "**/__generated__/**", "**/schema/**"],
  artifactDirectory: 'src/schema/__generated__'
}
