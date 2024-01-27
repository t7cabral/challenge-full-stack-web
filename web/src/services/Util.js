export default {
  delay: function(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
}

