# License Server

Like [mit-license](https://github.com/remy/mit-license), but:

-   for other licenses too and
-   self-hosted

<img src="https://coinsh.red/u/2a95c80c-f8c1-4e62-b5bd-28896b7cbf7d.jpg" alt="Screenshot of /mit/2018- showing the MIT license with license years 2018–2020" width="400"/>

## Installation

### With docker

1. [Login to the Docker GitHub Package registry](https://docs.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-with-a-personal-access-token)

    ```sh
    docker login docker.pkg.github.com -u johndoe
    # Enter your access token at the prompt
    ```

2. Pull the `license-server` container

    ```sh
    docker pull docker.pkg.github.com/shreyasminocha/license-server/license-server:0.1.0
    ```

3. Run the container

    ```sh
    docker run \
        -p 1235:3000 \
        -e LICENSE_HOLDER='John Doe <john@example.com>' \
        -d docker.pkg.github.com/shreyasminocha/license-server/license-server:0.1.0
    ```

### With node and npm

Assuming you have [node and npm installed](https://nodejs.org/en):

1. Clone this repo — `git clone git@github.com:shreyasminocha/license-server`
2. `cd` into it — `cd license-server`
3. Install dependencies — `npm install`
4. Set the `PORT` environment variable, the port which the server will listen on. This is `3000` by default.
5. Set the `LICENSE_HOLDER` environment variable to your name.
6. `npm start`

## Usage

**Note**: Case-sensitive when deployed on case-sensitive file systems.

### `GET /MIT`

### `GET /MIT/2017`

### `GET /MIT/2017-`

### `GET /MIT/2017-2020`

## Requesting new licenses

Create a PR or an issue!

-   License must either be [OSI-approved](https://opensource.org/licenses/alphabetical) or a [CC license](https://creativecommons.org/licenses/).<sup>1</sup>
-   The license file must be included in the `licenses` folder with the [SPDX short identifier](https://spdx.org/using-spdx-license-identifier) as its filename.
-   The placeholder for the license holder's name must be `${holder}`. That of the license duration must be `${year}`

<sup>1</sup>: Exceptions to this rule—for licenses like WTFPL—may be made at our discretion.

## License

[MIT License](https://l.shreyasminocha.me/MIT/2020-) 😉
