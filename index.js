#!/usr/bin/env node
"use strict";
const commander  = require("commander");
const request    = require("request-promise");
const redditUrls = [
        "https://www.reddit.com/r/funnyvideos/.json",
        "https://www.reddit.com/r/Funnypics/.json",
        "https://www.reddit.com/r/funnygifs/.json",
        "https://www.reddit.com/r/Funny/.json"
      ];
  //    Register arguments with commander
  commander.version('0.1.0')
            .option('-v, --video', 'opens a funny video')
            .option('-g, --gif',   'opens a funny gif')
            .option('-p, --pic',   'opens a funny pic')
            .option('-q, --quiet', 'opens a funny not video')
            .parse(process.argv);

  //  Sets the lookup url based on command line arguments
  let funUrl = redditUrls[3];
  if( commander.video ){
    funUrl = redditUrls[0];
  }
  if( commander.pic ){
    funUrl = redditUrls[1];
  }
  if( commander.gif ){
    funUrl = redditUrls[2];
  }
  if( commander.quiet ){
    funUrl = redditUrls[Math.floor(Math.random()*redditUrls.length)+1];
  }

  console.log('Get ready to lol...');
  //  Go get our JSON data
  request(funUrl)
    .then( data => {
      let parsed   = JSON.parse(data).data.children,
          l = parsed.length,
          n = Math.floor(Math.random() * (l - 1)) + 1;
      if( commander.quiet && parsed[n].data.domain.indexOf("youtube") > -1 ){
        n = Math.floor(Math.random() * (l - 1)) + 1;
      };
      //  open our funny url
      console.log(parsed[n].data.url);
      process.exit(1);
    })
    .catch( err => {
      console.warn(err);
      process.exit(0);
    });
