<h1 align="center">Welcome to websocket-aws-api-gateway 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Aws api-gateway websocket connect through Http

## Prerequisites
- nodejs >= 14.0
- npm >= 7.11.1
- ngrok >= 2.3.35
- wscat >= 4.0.1

## Install
Install package dependencies via npm.
```sh
npm install
```
Install ```wscat``` in global package
```sh
npm install -g wscat
```
## Usage
1.Run Express server, the server will binding on port ```3000```.
```sh
npm run start
```
2.Start ngrok command with ```http``` port ```3000```
```sh
ngrok http 3000
```
3.Copy you url-endpoint from ```ngrok``` and paste into Aws-ApiGateway

4.Config Routes type [$connect, $disconnect, $default] in Aws-ApiGateway

5.Deploy Aws-ApiGateway

6.Run ```wscat``` in another terminal.
```sh
wscat -c wss://{api-id}.execute-api.{aws-region}.amazonaws.com/{stage}/
```
7.Run client connected to server.
```sh
npm run client
```

## Author

👤 **Thanapon tapala**

* Website: https://thanapon.info
* Github: [@toygame](https://github.com/toygame)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_