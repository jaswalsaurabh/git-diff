# Solution

## Technologies Used

- NodeJs
- Express
- React
- Github API

## Project Overview

This project involves a NodeJs server and a React application to show git diffs in a UI. The application calls the GitHub API at server side and caches the response using commit IDs to handle API rate limits.

### Server-Side Enhancements

1. **Efficient Caching**
   - **In-Memory Cache**: Use libraries like `node-cache` or `lru-cache` for fast in-memory caching.
   - **Persistent Cache**: Use a database or persistent caching system like `Redis` to ensure cached data persists across server restarts.

2. **Handling Stale Cache Data**
   - **Cache Expiry**: We use a time-to-live (TTL) for our cached data. After a certain period, the cache is automatically invalidated, forcing a fresh fetch from the GitHub API.
   - **Conditional Requests**: We use ETags or Last-Modified headers for conditional requests. When making a request to the GitHub API, we include the ETag from the last response. If the data has not changed, GitHub returns a 304 Not Modified status, and we use the cached data. If the data has changed, GitHub returns the new data and a new ETag.

### Client-Side Enhancements

1. **Virtualization**
   - Use libraries like `react-window` or `react-virtualized` to efficiently render large lists of diffs without affecting performance.
2. **Responsive Design**
   - Ensures content adapts optimally to different screen sizes.
