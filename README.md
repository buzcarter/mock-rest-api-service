# Local Testing API Response Codes

A mock REST API endpoint that'll return whichever status code you request after an `n` second delay, specified by you.

## Usage

Start Server

```sh
$ node index
Listening on port 3080
```

Call your mock service endpoint:

```bs
$ curl localhost:3080/api/302/6
```

Returns response code `302` after a 6 second delay.

### Server Output

```sh
$ node index
Listening on port 3080
Request => (Response Code: 301, Delay: 0 seconds)
```

