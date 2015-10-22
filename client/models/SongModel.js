// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  // initialize: function(data){
  //   this.set('title', data.title);
  //   this.set('artist', data.artist);
  //   this.set('url', data.url);
  //   console.log(this.get('url'))
  // },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }, 

  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
