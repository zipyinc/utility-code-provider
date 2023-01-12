# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
node_modules
/.pnp
.pnp.js
logs
*.log*
*.json

# testing
/coverage

# production
/build
mock-sample-data

# misc
.DS_Store
.env*
!*.enc
!.env.example
*.properties

npm-debug.log*
yarn-debug.log*
yarn-error.log*
*.heapsnapshot
*.har

# Whitelist json files

!package.json
!package-lock.json
!tsconfig.json
!tslint.json
!timeZoneConfig.json
!BreadCrumbConfig.json