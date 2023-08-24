const nodeEnv = (process.env.NODE_ENV || "development").toLowerCase()
const prettierEnv = (process.env.PRETTIER_ENV || "default").toLowerCase()
/**
 * @typedef {import('prettier').Config} PrettierOptions
 */

/**
 * Contains possible prettier configs
 * @type {{[key:string]: import("prettier").Config}}
 */
const prettierConfigs = {
  default: {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    jsxSingleQuote: false,
    printWidth: 120,
    proseWrap: "always",
    quoteProps: "consistent",
    // parser: "json5",
    semi: false,
    singleAttributePerLine: true,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "none",
    useTabs: false,
    vueIndentScriptAndStyle: false
  },
  other: {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    htmlWhitespaceSensitivity: "css",
    insertPragma: false,
    jsxSingleQuote: false,
    printWidth: 80,
    proseWrap: "preserve",
    quoteProps: "consistent",
    requirePragma: false,
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    tabWidth: 2,
    trailingComma: "all",
    useTabs: false,
    vueIndentScriptAndStyle: false
  }
}

module.exports = prettierEnv in prettierConfigs ? prettierConfigs[prettierEnv] : prettierConfigs.default
