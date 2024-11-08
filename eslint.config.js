import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y  from 'eslint-plugin-jsx-a11y';

export default [
    ...eslintPluginAstro.configs.recommended,
    ...eslintPluginAstro.configs["jsx-a11y-recommended"],
    // ...jsxA11y.configs['jsx-a11y-recommended'],
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  }
];