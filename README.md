echo-slack.js
=================

セットアップ
---------------

### 1. setup module

```
npm install slack-node
```


### 2. make configuration file


conf.js:

```text:
exports.url        = "Your Incoming Webhook's URL";
exports.channel    = "Your Channel name (without #)";
exports.username   = "Your User name";
exports.icon_emoji = "Your Emoji Icon (without ':')";
```

conf.js(sample):

```text:
exports.url        = "https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/xxxxxxxxxxxxxxxxxxxxxxxx";
exports.channel    = "general";
exports.username   = "おはようnodebot";
exports.icon_emoji = "sunrise";
```


Usage
--------

```
node echo-slack.js
```

