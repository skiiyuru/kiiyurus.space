---
title: "Into the Deep: Self-Hosting Your Astro Site"
description: "A technical guide to migrating from managed hosting to a self-hosted Digital Ocean setup."
pubDate: 2025-02-03
image: https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8u9KE2x6sG0tEsFe9RMNwHOaQoAkXDLbiy7UVh
isDraft: false
---

## Introduction

After a year of building with [Astro](https://astro.build/), I decided to transition from managed hosting solutions to a self-hosted setup. This series covers the migration process from Netlify to Digital Ocean, focusing on server configuration and deployment strategies.

## Prerequisites

Before diving into the server setup, you'll need:

1. A registered domain name (via [Namecheap](https://www.namecheap.com/) or similar)
2. A Virtual Private Server (VPS) from [Digital Ocean](https://www.digitalocean.com/)
3. Basic command line knowledge
4. SSH access to your server

## Server Configuration

The core of our setup revolves around two key components: Nginx as our web server and Node.js for running the Astro application. Here's how to configure them:

### 1. Installing and Configuring Nginx

First, install and start Nginx:

```bash
sudo apt install nginx
sudo service nginx start
```

Verify the installation by accessing your server's IP address. You should see the default Nginx welcome page.

### 2. Setting Up Node.js

Install Node.js using the official distribution:

```bash
# Follow Node.js official installation steps
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Create a test application to verify the setup:

```javascript
const http = require('node:http')

http
  .createServer((req, res) => {
    res.write('Node.js server running')
    res.end()
  })
  .listen(3000)

console.log('server started on port 3000')
```

### 3. Configuring Nginx as a Reverse Proxy

Create a virtual server configuration in `/etc/nginx/sites-enabled/kiiyurus.space`:

```nginx
server {
  listen 80 default_server;
  listen [::]:80 default_server;

  root /var/www/html;
  index index.html;

  server_name kiiyurus.space;

  location / {
      proxy_pass http://127.0.0.1:3000/;
  }
}
```

Update the Nginx configuration in `/etc/nginx/nginx.conf`:

```nginx
##
# Virtual Host Configs
##

include /etc/nginx/conf.d/*.conf;
include /etc/nginx/sites-enabled/kiiyurus-space;
```

### 4. Deploying the Configuration

Apply the changes with these commands:

```bash
sudo nginx -t          # Test configuration
sudo service nginx restart
node server.js         # Start the Node application
```

At this point, accessing your server's IP address should display the Node.js test message instead of the default Nginx page.

## Next Steps

Part 2 of this series will cover:
- Deploying the Astro application
- Setting up PM2 for process management
- Configuring SSL certificates
- Implementing automatic deployments

The foundation we've built here provides a robust base for hosting not just Astro sites, but any Node.js application.
