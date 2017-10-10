<template>
  <div>{{ post.subject }}</div>
  <div>{{ post.createdAt }}</div>
</template>

<script>

import http from '../../services/http';

export default {
  data () {
    http.get('/api/Users?filter=%7B%22something%22%3A%22value%22%7D', {})
    .then(function () {
      console.log('get');
    });
    return {
      post: {
        subject: 'Test',
        createdAt: new Date()
      }
    }
  }
}
</script>
