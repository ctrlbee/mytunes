// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay class="player" />',

  initialize: function() {
    // this.$el.on('ended', function(){
    //   console.log("vvvvv");
    //   this.model.dequeue();
    // });
  },

  events: {
    'ended': function() {
      this.model.dequeue();
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
    // this.$el.on('ended', function(){
    //   console.log("vvvvv");
    //   this.model.dequeue();
    // });
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
