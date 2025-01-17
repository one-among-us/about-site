---
title: Member Zone
---

### 成员注册

1. Google Workspace

- 联系 <MailTo template="workspaceadmin [at] oneamongus [dot] ca" /> 申请注册，提供自己希望用的 First Name 和 Last Name（系统暂时不能做到只有一个名字，如果没有 Last Name 的话请把 First Name 重复一遍）、希望的账号名称 (<MailTo template="username [at] oneamongus [dot] ca" />)、绑定的个人邮箱名称。

- 访问 [Google Groups](https://groups.google.com)，点左侧 All Groups 查看并申请加入自己的工作组。

2. Telegram 群

- 联系 Telegram 账号 @kitakarikibo 申请加入全体成员大群。

- 联系各个工作组的组长或活跃成员申请加入工作组群。

3. GitHub 组织

- 联系 Telegram 账号 @kitakarikibo 申请成为 GitHub Organization 成员。（这条可能会改）

### 常用工作平台

1. Google

- Email [mail.oneamongus.ca](http://mail.oneamongus.ca)

- Calendar [cal.oneamongus.ca](http://cal.oneamongus.ca)

- Drive [drive.oneamongus.ca](http://drive.oneamongus.ca) 点左侧 Shared Drive - One Among Us 进公用网盘

- Workspace Admin [admin.google.com](https://admin.google.com)

2. [Telegram](https://web.telegram.org)

3. [GitHub](https://github.com/one-among-us)

4. Online Conference 可以选择 Google Meet 或者 [conf.oau.app](https://conf.oau.app)，后者管理员密码请在群里问

### 常用填写表格

1. [简报和项目进度表](https://docs.google.com/spreadsheets/d/10HKV6kVFKswh-iUC-Vktxkzf0lY9CMzMm8JINPIgKOU/) 有新的进展记得填写，工作留痕

2. [报销表格](https://drive.google.com/file/d/1c4JxY_PQV_Ny8-i5-1cTIWju0Nmf8jbJ/view?usp=drive_link) 填写之后和相关证明一起发送到财务邮箱（donate@）

3. [成员名单](https://contacts.google.com/directory)

4. [事件/活动日历](https://calendar.google.com/calendar/u/2?cid=Y19kZWYzZGMxNjJkZGFmM2IxNWIzZWU0MTk1NTFhMmI2NTA2OGIyNDkzYzBlY2JiZGNlN2RhYTg2N2YyYmMwYWViQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20) 对这里的更改会同步到网站首页

### 网络维护

1. [Tailscale](https://login.tailscale.com/admin) 用自己的 GitHub 账号登录并且授权访问组织，可以进入内网——注意：登录受限了，正在搭 Headscale

2. [Cloudflare Dashboard](https://dash.cloudflare.com/login)

3. Monitors:

- [heartbeat.oau](https://artefaritakuniklo.github.io/heartbeat.oau/) 看看 One Among Us 服务器过得怎么样

- [Matrix Server](https://oau.app/_matrix/client/versions), [Matrix-Telegram Relay Bot](https://t.me/oaumsgfwdbot)

- [GitHub Updates Lookup](https://t.me/oau_github)

4. How to Log into Servers:

when connected tailscale, `ssh <account>@<hostname>`

where `<hostname> = oau-vultr, <account> = root`

or `<hostname> = ctvp, <account> = <your registered name>`
