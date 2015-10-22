// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log(this.collection)
    this.collection.on('add', this.render, this);
    this.render();
  },

  render: function() {
    console.log('SQV render fired')
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
