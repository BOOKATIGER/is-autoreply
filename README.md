
# is-autoreply

![is-autoreply](https://api.travis-ci.org/walling/is-autoreply.svg)

Returns `true` if email is an autoreply according to the email headers.

Please [open an issue](https://github.com/walling/is-autoreply/issues) if an email isn't properly detected as autoreply :)


## Installation

```bash
npm install --save is-autoreply
```

## Programmatic usage

```js
const isAutoreply  = require('is-autoreply');
const emailHeaders = { 'X-Auto-Response-Suppress': 'OOF' };

if (isAutoreply(emailHeaders)) {
  console.log('The email is an autoreply');
}
```

## License

[MIT](LICENSE)
