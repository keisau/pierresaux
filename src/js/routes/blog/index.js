import React from 'react'
import { IndexRoute, Route } from 'react-router'

import { Blog, BlogIndex, Entry, createEntry } from '../../components/Blog'

export default {
  path: 'blog',
  component: Blog,
  indexRoute: { component: BlogIndex },

  // TODO: get routes from API endpoint
  getChildRoutes(location, cb) {
    console.log(Entry)
    const blogEntries = [
      {
        path: 'test1',
        data: {
          title: 'hello world',
          createdAt: 1234,
          body: `this is a __test__ article
\`\`\`js
var a = 123;
\`\`\``,
          category: 'test',
          tags: [ 'tag1', 'tag2' ]
        }
      }
    ]
    cb(null, blogEntries.map((entry) => {
      return {
        path: entry.path,
        component: createEntry(entry)
      }
    }))
  }
}
