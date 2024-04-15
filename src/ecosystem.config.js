//Configuration for the Azurte server

module.exports = {
  apps: [
    {
      name: 'vuelos_api',
      script: '../dist/main.js',
      instances: 'max',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
