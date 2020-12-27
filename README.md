# InviteManager Discord Bot

## Description

This is the code repository for the InviteManager Discord Bot.

## Docs

[Click here to view the documentation](https://docs.invitemanager.co)

## Self hosting quick setup

### Requirements

- NodeJS (tested using v10 and v12)
- Database (tested using `MySQL` 5.7+, `MariaDB` 10.2+ should work)
- Rabbitmq
- Sentry (sentry.io)

### Setup

1. `git clone https://github.com/dragonblitz10/invite-manager-bot`
1. `npm install`
1. Setup databases

```
CREATE DATABASE im_0;
use im_0;
source /root/invite-manager-bot/scripts/db/setup_db0.sql;


CREATE DATABASE im_1;
use im_1;
source /root/invite-manager-bot/scripts/db/setup_dbx.sql;
```

1. Copy the `config.example.json` to `config.json` and fill in required data
1. `npm start`
