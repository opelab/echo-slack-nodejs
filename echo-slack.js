var Slack    = require('slack-node');
var webhook  = require("./conf.js");

var url        = webhook.url;
var channel    = webhook.channel;
var username   = webhook.username;
var icon_emoji = webhook.icon_emoji;

var text = "Hello!";

slack = new Slack();
slack.setWebhook(url);

slack.webhook({
  channel:    "#" + channel,
  username:   username,
  icon_emoji: ":" + icon_emoji + ":",
  text:       text
}, function(err, response) {
  console.log(response);
});
