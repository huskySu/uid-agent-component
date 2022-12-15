### npm publish

- Update package.json, set version to a prerelease version, e.g. `2.0.0-rc1`, `3.1.5-rc4`, ...
- Run `npm pack`to create package
- Run `npm publish <packagename>.tgz --tag next` to publish the package under the next tag. (if can't publish first time, use `npm publish --access=public`)
- Run `npm install --save package@next` to install prerelease package
