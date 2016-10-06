# Local Testing API Response Codes

A mock REST API endpoint that'll return whichever status code you request after an `n` second delay, specified by you.

###### Shout Outs:

This exists solely because the incredibly useful `testinsane.com/rte` was made private, this is my implementation of its features.

## Simple Example Usage

Start server

```sh
$ node index
Listening on port 3080
```

Start server on a different port

```sh
$ node index 8089
Listening on port 8089
```

Call your mock service endpoint:

```bs
$ curl localhost:3080/status/302/6
```

Returns response code `302` after a 6 second delay.

### Server Output

```sh
$ node index
Listening on port 3080
Request => (Response Code: 301, Delay: 0 seconds)
```

## Documentation

* **Method GET**: Get endpoints responds with HTTP Status Code and empty content. 
* **Method POST**: Post endpoints responds with HTTP Status Code and data sent by the client as part of request. 

Detailed individual endpoint information is given bellow.

* [Get `/list`](#get_list)
* [Get `/random`](#get_random)
* [GET `/status`](#get_status)

**Note:** Where applicable `delay` value must be between 0 and 600, otherwise response returns immediately. "0" is default, meaning no delay.

--

### <a id="get_list"></a> GET `/list`

* Returns JSON object with complete list of allowed codes
* Usage: `http://localhost:3080/list`
* Method: GET

--

### <a id="get_random"></a> GET `/random`

* Gets random HTTP Status Code
* Usage: `http://localhost:3080/random/{delay}`
* Method: GET

##### URL Params

Name          | Type          | Description
------------- | ------------- | -----------------------------
delay         | integer       | (Optional) Delay in seconds before response is sent.

##### Example 1:

* Request: `/random/5`
* Code: 200 OK
* Content: 

##### Example 2: 
* Request: `/random`
* Code: 401 UNAUTHORIZED 
* Content:

--

### <a id="get_status"></a> GET `/status`

* Gets specified HTTP Status Code
* Usage: `http://localhost:3080/status/{code}/{delay}`
* Method: GET

##### URL Params

Name          | Type          | Description
------------- | ------------- | -----------------------------
code          | integer       | (Required) HTTP Status Code to return.
delay         | integer       | (Optional) Delay in seconds before response is sent.

##### Example 1:

* Request: `/status/200`
* Code: 200 OK
* Content: 

##### Example 2: 
* Request: `/status/401/3`
* Code: 401 UNAUTHORIZED 
* Content:


