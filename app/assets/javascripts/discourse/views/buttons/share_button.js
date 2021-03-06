/**
  A button for sharing a link to a topic

  @class ShareButton
  @extends Discourse.ButtonView
  @namespace Discourse
  @module Discourse
**/
Discourse.ShareButton = Discourse.ButtonView.extend({
  textKey: 'topic.share.title',
  helpKey: 'topic.share.help',
  'data-share-url': Em.computed.alias('topic.shareUrl'),

  renderIcon: function(buffer) {
    buffer.push("<i class='icon icon-share'></i>");
  }
});

