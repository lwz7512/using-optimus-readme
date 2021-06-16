# DUMMY PAGE

This page is used as menu items customization other than built-in pages like `README.md`, `CHANGELOG.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTION.md`, `CORE_TEAM.md`.

For example:

By creating a `YOUR_PAGE.md`, add adding belowing item to `menu` section in `package.json`:

```
{
  "name": "PAGENAME",
  "slug": "/your_page"
}
```

then rebuild docs:


```
% npm run docs
```

> Note: `name` could be shorter to explain your page content, `slug` must be corresponding your file name and in lower case!
> Look out the package.json syntax! items in `menu` section must be separated by comma.
> Besides, no comma allowed before `]`