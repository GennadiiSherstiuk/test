<template>
  <div>{{ post.subject }}</div>
  <div>{{ post.createdAt }}</div>

  <div v-if="showPost">
    <input type="text" v-model="newPost.subject">
    <button v-on:click="sendRequest">sendRequest</button>
  </div>
  <button v-on:click="togglePost">create post</button>
</template>

<script>

import http from '../../services/http';
import userService from '../../services/userService';

export default {
  data () {
    http.get('/api/Users?filter=%7B%22something%22%3A%22value%22%7D', {})
    .then(function () {
      console.log('get');
    });
    return {
      newPost: {
        subject: '',
        createdAt: new Date()
      },
      post: {
        subject: 'Test',
        createdAt: new Date()
      },
      showPost: false
    }
  },
  methods: {
    togglePost: function() {
        this.showPost = !this.showPost;
      },
    sendRequest: function() {
      let userId = userService.getUserId();
      console.log(userId)
      // http.post('/api/Users?filter=%7B%22something%22%3A%22value%22%7D', {})
      //   .then(function () {
      //     console.log('get');
      //   });
    }
  }
}
</script>
