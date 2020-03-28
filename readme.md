# license

[mit-license](https://github.com/remy/mit-license), but:

-   for other licenses too and
-   self-hosted

## Installation

Assuming you have [node and npm installed](https://nodejs.org/en):

1. Clone this repo — `git clone git@github.com:shreyasminocha/license`
2. `cd` into it — `cd license`
3. Install dependencies — `npm install`
4. Set the `PORT` environment variable, the port which the server will listen on. This is `3000` by default.
5. Set the `LICENSE_HOLDER` environment variable to your name.
6. `npm start`

## Usage

### `GET /mit`

### `GET /mit/2017`

### `GET /mit/2017-`

### `GET /mit/2017-2020`

## Requesting new licenses

Create a PR or an issue!

-   License must either be [OSI-approved](https://opensource.org/licenses/alphabetical) or a [CC license](https://creativecommons.org/licenses/).[^1]
-   The license file must be included in the `licenses` folder with the [SPDX short identifier](https://spdx.org/using-spdx-license-identifier) as its filename.
-   The placeholder for the license holder's name must be `${holder}`. That of the license duration must be `${year}`

[^1]: Exceptions to this rule—for licenses like WTFPL—may be made at our discretion.

## License

[MIT License](https://shreyas.mit-license.org)
