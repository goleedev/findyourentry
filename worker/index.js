var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch-github')

// fetch github jobs at every min
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');