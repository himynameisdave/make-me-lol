"use strict";
require('../.env.js'); // sets the environment variables

const gitLabel = require('git-label'),
      config   = {
        api   : 'https://api.github.com',
        repo  : 'himynamei/make-me-lol',
        token : process.env.GIT_LABEL_TOKEN
      },
      packages = ['labels/packages/status.json', 'labels/packages/type.json'];

      gitLabel.add(config, packages)
        .then(console.log)
        .catch(console.log);
