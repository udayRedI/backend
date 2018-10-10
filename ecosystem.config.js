module.exports = {
  apps : [{
    name      : 'node-webpack-babel-starter',
    script    : './dist/backend.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    },
    exec_mode: 'cluster',
    instances: 'max',
    output: './logs/out.log',
    error: './logs/error.log',
    log: './logs/combined.outerr.log',
  }],

  deploy : {
    production : {
      user : 'node',
      host : '<>',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : './dist/backend.js',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
