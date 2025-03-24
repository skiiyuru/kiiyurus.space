---
title: "Hosting an Astro site in Digital Ocean: Part 1"
description: "From Netlify newbie to self-hosting superhero: Join me on a wild ride as I ditch the training wheels and set up my Astro site on Digital Ocean!"
pubDate: 2025-02-03
image: https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uGGYeTEIsi8ZJcAXj1mhf6EtSI4kdGbxPuF0D
isDraft: false
---

## Introduction

Let me tell you about my love story with [Astro!](https://astro.build/) We've been going steady for a year now. I was hunting for the perfect framework for my portfolio site - you know, something that would let me play with React and ThreeJS while also managing a blog. Spoiler alert: Astro was 'the one'!"

I decided to level up from the cozy nest of Netlify and Vercel to become a proper tech grown-up with my own server and swanky domain: kiiyurus.space. To help me adult properly, I dove into Jem Young's [course](https://frontendmasters.com/courses/fullstack-v3/) on Frontend Masters.". Side note: I highly recommend anyone stuck in tutorial hell and is looking for a way out to give Frontend Masters a try. Learning concepts from engineers who’ve been in the game for decades will set you on a path that is well informed by industry experts. These guys cut out the fluf and teach you the most important things to get you building according to industry standards. A special thanks to [Brian Holt, Jem Young, Scott Moss and Jen Kramer](https://frontendmasters.com/teachers/) for teaching so well.

Back to the discussion at hand, while taking Jem’s course, I discovered the steps I needed to take to achieve my big dreams:

1. Buy a domain name (I chose [Namecheap](https://www.namecheap.com/))
2. Buy a virtual private server (I chose [Digital Ocean](https://www.digitalocean.com/))
3. Register my domain to a Name Server (I chose Digital Ocean)
4. Setup the web server
5. Clone the astro site into the server

This article will mainly focus on step 4.

## The server

I purchased the entry level server offering going for about $4/month running ubuntu and was able to connect to it through SSH. But now the big question was: how will this machine know how to serve my astro site? In comes [NginX](https://www.f5.com/go/product/welcome-to-nginx). It is a web server that processes incoming requests to a server and determines what to do with them. So i did the following:

1. Installed nginx: `sudo apt install nginx`
2. Launched the nginx service: `sudo service nginx start`
3. Tested it by entering my server’s IP address to the browser and I got this

![Nginx welcome page](https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uf78FG1IrOTqpFo1QjXg5nImZbzJAHtedx0V2)

Nginx has a number of files and folders that control its operations. By default nginx is set up to serve a static html page. This is what we saw in the image above. But now we need it to somehow run our astro site instead. Nginx can also redirect requests to applications running in our server. One such application is a node application that runs JavaScript code on the server. I thus did the following (code modifications were done using Vim) :

1. Installed node using these official steps from [Node](https://github.com/nodesource/distributions?tab=readme-ov-file#debian-and-ubuntu-based-distributions)
2. Created an app directory in `/var/www/`
3. Created a file `server.js` and added the code below

```javascript
const http = require('node:http')

http
  .createServer((req, res) => {
    res.write('On the way to being a fullstack engineer!')
    res.end()
  })
  .listen(3000)

console.log('server started on port 3000')
```

4. Created a virtual server in `etc/nginx/sites-enabled/kiiyurus.space` that will bridge the communication between the the node server and nginx server . Notice it uses the same IP as the node server

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

5. Added the virtual server to nginx configuration`/etc/nginx/nginx.conf`

```bash
    ##
    # Virtual Host Configs
    ##

    include /etc/nginx/conf.d/*.conf;
    include /etc/nginx/sites-enabled/kiiyurus-space;

```

6. Checked that nginx was still okay: `sudo nginx -t`
7. Restarted nginx: `sudo service nginx restart`
8. Started the node app: `node server.js`
9. Tested it by entering my server’s IP address to the browser and got this

![Node server](https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8uPkxWcRbYD9N05itq8hZpv341cEdzHGOob6TL)

Hurray! Nginx was now serving the node app instead of the default web page. Now all we had to do is replace the node app with my astro project. And that’s what I’ll cover in part 2 of this story. Keep your eyes peeled for that one!
