# awesome-create-npm

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency status][daviddm-image]][daviddm-url]
[![CircleCI](https://circleci.com/gh/zivyangll/awesome-create-npm.svg?style=svg)](https://circleci.com/gh/zivyangll/awesome-create-npm)

`npm init create-npm` to create a awesome npm module.

> Never manually do the linting, versioning, tagging, editing changelog and pushing commit, unleash the power of hooks.

## Create a npm module

- use `npm`

```bash
# choose one of the following methods
$ npm i -g awesome-create-npm && create-npm [name]
$ npx create-npm [name]
```

- use `yarn`

```bash
$ yarn create create-npm [name]
```

## Workflow of publishing a npm module

Commit and publish, everything will be done automatically.

```bash
$ git commit
$ npm publish
```

## Optional workflow

Use `git cz` instead of `git commit`, this will generate better changelog.
You need to install `commitizen` and create `~/.czrc`.

```bash
$ npm install commitizen -g
$ echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
```

Workflow:

```bash
$ git cz
$ npm publish
```

## Related

- [create-nm](https://github.com/ant-ife/create-nm) `npm init nm`.
- [np](https://github.com/sindresorhus/np) A better `npm publish`.
- [commitizen](https://github.com/commitizen/cz-cli) Simple commit conventions for internet citizens.
- [conventional-changelog](https://www.npmjs.com/package/conventional-changelog-cli) Generate a changelog from git metadata.
- [lint-staged](https://github.com/okonet/lint-staged) Lint files staged by git.
- [husky](https://github.com/typicode/husky) Prevents bad commit or push (git hooks, pre-commit/precommit, pre-push/prepush, post-merge/postmerge and all that stuff...)].


## License

[MIT](http://opensource.org/licenses/MIT)

[npm-image]: https://img.shields.io/npm/v/awesome-create-npm.svg?style=flat-square&logo=npm
[npm-url]: https://npmjs.org/package/awesome-create-npm
[travis-image]: https://img.shields.io/travis/zivyangll/awesome-create-npm/master.svg?style=flat-square&logo=travis
[travis-url]: https://travis-ci.org/zivyangll/awesome-create-npm
[daviddm-image]: https://img.shields.io/david/zivyangll/awesome-create-npm.svg?style=flat-square
[daviddm-url]: https://david-dm.org/zivyangll/awesome-create-npm
<!-- GITCONTRIBUTOR_START -->

## Contributors

|
||


This project follows the git-contributor [spec](https://github.com/xudafeng/git-contributor), auto updated at `Fri Sep 20 2019 11:02:44 GMT+0800`.

<!-- GITCONTRIBUTOR_END -->
