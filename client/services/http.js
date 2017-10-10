import Vue from 'vue';


export default {
  get(url, data) {
  	return Vue.http.get(url, data);
  },
  post(url, data) {
  	return Vue.http.post(url, data);
  }
};