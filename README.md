# USING NEXT-OPTIMUS-README


This project is used to demonstrate how to use [`next-optimus-readme`](https://github.com/lwz7512/next-optimus-readme) which generate project documents by transpiling a couple of markdown files.

This will be presented as home page! 

Enjoy! 😀


## HOWTOs


```
% cd your/work-directory
% git clone https://github.com/lwz7512/next-optimus-readme.git
% git clone https://github.com/lwz7512/using-optimus-readme.git
```

Then install -> generate docs -> preview by:

```
% cd using-optimus-readme
% npm i
% npm run docs
% npm start
```

visit `http://localhost:5000`


done! 🙌


> Note: Change your logo/banner/menu in `package.json`, and put image files into assets folder.
> You could push this newly generated docs to [`netlify`](https://www.netlify.com/) or [`vercel`](https://vercel.com/), but it does not works with github pages unfortunately.

## Requiements

- Node environment version > 12
- Basic knowledge of frontend tech


## TODOs

- favicon images customization
- add more themes like github pages provided
- [Architect theme](https://pages-themes.github.io/architect/) conversion to next.js
