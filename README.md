# Basic Setup
1.  ```npm create astro@latest```
2. cd into it
3. Add solid ```npx astro add solid``` or react ```npx astro add react```
4. Add tailwind ```npx astro add tailwind```
5. Add sitemap ```npx astro add sitemap```
6. Add prettier plugins ```npm install --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss```
7. Add astro seo schema ```npm install schema-dts astro-seo-schema```
6. add this to "compiler options" in tsconfig.json
```
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "src/components/*"
      ],
      "@layouts/*": [
        "src/layouts/*"
      ],
      "@assets/*": [
        "src/assets/*"
      ],
      "@utils/*": [
        "src/utils/*"
      ],
      "@store/*": [
        "src/store/*"
      ]
    },
```
7. copy .pretterrc and .prettierignore to main folder
8. (optional) add motion ```npm install motion```
9. create main.css file with tailwind data like exmaple (main_EXAMPLE.css)
10. create baselayout like exmaple (BaseLayout_EXAMPLE.astro)