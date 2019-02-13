module.exports = {
  'src/**/*.{js,jsx,ts,tsx,json,css,scss,md}': [
    'prettier',
    'git add',
  ],
  "src/**/*.js": ["eslint --fix", "git add"]
};
