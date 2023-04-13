const { execSync } = require('child_process')
execSync('npm i', { stdio: "inherit"} )
execSync('npm i nodemon')
execSync('npm run nodemon', { stdio: "inherit"} )
