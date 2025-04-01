---
title: "GraphQL: Love at first sight"
description: GraphQL isn’t just another way to fetch data—it’s a paradigm shift in API design.
pubDate: 2025-03-31
image: https://rzei8mczw5.ufs.sh/f/v9xa1lyXWM8u3OcUHbEPDkeByTtHrVox72MwN9nh4RvQFZdl
isDraft: false
---

## TL;DR

[GraphQL](https://graphql.org/) is a query language for APIs that lets clients request exactly what they need—nothing more, nothing less. Unlike [REST](https://www.redhat.com/en/topics/api/what-is-a-rest-api), which relies on multiple endpoints, GraphQL provides a single endpoint (usually `/api/graphql`) from which clients can specify what data they need. The result? More flexibility, less over-fetching and under-fetching, and a better developer experience overall.

## Why GraphQL Won Me Over

### 1. The Power of Precise Data Fetching

The biggest "aha" moment for me was realizing how much control GraphQL gives you over your data. With REST, you often get back a whole bunch of data, even if you only need a small portion. GraphQL flips that script.

```graphql
query {
  user(id: "user-1") {
    name
    posts(limit: 3) {
      title
    }
  }
}

```

Response:

```json
{
  "data": {
    "user": {
      "name": "Stephen Kiiyuru",
      "posts": [
        { "title": "GraphQL is amazing!" },
        { "title": "Goodbye REST?" },
        { "title": "Why types matter" }
      ]
    }
  }
}
```

This simple query retrieves only the `name` field for a specific user, together with the `title` of the posts belonging to that user. No more multiple fetch calls and bloated responses.

### 2. The Backbone of Strong Schemas

Another revelation was GraphQL’s schema system. It acts as a contract between the frontend and backend, ensuring that everyone speaks the same language. No more guessing what an API returns—GraphQL makes it explicit, structured, and predictable. ([Codegen](https://the-guild.dev/graphql/codegen) makes this even more effortless!)

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
}

```

This snippet shows a basic schema defining `User` and `Post` types. It's like a blueprint that both the frontend and backend teams can rely on.

### 3. The Bridge of Resolvers

Resolvers were the missing puzzle piece that finally made GraphQL click for me. They act as the bridge between your schema and data, dynamically fetching only what’s needed. Instead of manually stitching multiple REST calls together, GraphQL handles it for you behind the scenes.

```javascript
const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      // Fetch user data from database based on args.id
      return database.findUserById(args.id)
    },
  },
  User: {
    posts: (parent, args, context, info) => {
      // Fetch posts for the current user (parent)
      return database.findPostsByUserId(parent.id)
    },
  },
}
```

This snippet illustrates how resolvers link the user and posts fields to data retrieval functions. It's where the magic happens!

### 4. The Confidence of Mutations

One of the biggest pain points in REST is managing API consistency across different endpoints for creating, updating, and deleting data. GraphQL’s mutations solve this beautifully, providing a structured and flexible way to modify data while ensuring predictable responses.

```graphql
mutation CreatePost($title: String!, $content: String!, $userId: ID!) {
  createPost(title: $title, content: $content, userId: $userId) {
    id
    title
    content
  }
}

```

This mutation creates a new post and returns the created post's id, title, and content. It's a clear and concise way to handle data modifications.

### 5. The Developer Delight of Introspection

If you've ever struggled with outdated API documentation, GraphQL’s introspection feels like magic. You can explore your schema in real-time, see available queries and mutations, and test everything right from your browser. It’s like having an API blueprint built-in, always up-to-date.

### 6. The GraphQL Ecosystem

It's not just the language itself that's impressive; the GraphQL ecosystem is thriving. Libraries like [Urql](https://commerce.nearform.com/open-source/urql/) make client-side integration a breeze. On the server side, libraries like [Apollo](https://www.apollographql.com/docs/) and [Yoga](https://the-guild.dev/graphql/yoga-server) simplify the setup and management of GraphQL APIs.

I'm incredibly excited about the potential of GraphQL. It's transformed how I think about building APIs, and I can't wait to use it in my future projects. If you haven't given it a try yet, I highly recommend diving in. You might just fall in love too!

## Credits

A BIG thanks to [Scott Moss](https://github.com/Hendrixer) for making an incredible course on GraphQL. You can find it on [FrontEnd Masters](https://frontendmasters.com/courses/server-graphql-nextjs/)

Checkout [this repo](https://github.com/skiiyuru/server-side-gql) where I integrate GraphQL in an issue tracking web app.
