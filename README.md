
# is-autoreply

![is-autoreply](https://api.travis-ci.org/BOOKATIGER/is-autoreply.svg)

Returns `true` if email is an autoreply according to the email headers.

Please [open an issue](https://github.com/BOOKATIGER/is-autoreply/issues) if an email isn't properly detected as autoreply :)


## Installation

```bash
npm install --save is-autoreply
```

## Programmatic usage

Headers can be String, Buffer or Object (key/value). In case of String or Buffer, the headers are automatically parsed.

```js
const isAutoreply  = require('is-autoreply');
const emailHeaders = { 'X-Auto-Response-Suppress': 'OOF' };

if (isAutoreply(emailHeaders)) {
  console.log('The email is an autoreply');
}
```

## License

[MIT](LICENSE)
