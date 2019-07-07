---
sidebarDepth: 0
title: Spring
---


## tokern逻辑
1. 前端登陆，拦截登陆请求，生成token返回，token存入redis，有效期30分钟
2. 非登陆请求携带token，拦截请求并鉴权，鉴权通过验证token失效时间，小于5分钟则重新设置有效时间30分钟

