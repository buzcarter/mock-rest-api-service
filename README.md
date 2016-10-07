# Mock REST API Service

Test how well your app handles errors returned by RESTful API Services. 

This basic NodeJs app allows you to force any Response Code with the response delay (in seconds) of your choosing.

###### Shout Outs:

*This exists solely because [Test Insane](https://testinsane.com) took down their RestFul Test Endpoints tool, upon which I'd grown quite dependent. This is a crude approximation of that service.*

## Installation

Dependencies: this was written under Node version `v4.4.2` and npm version `2.15.0`.

After downloading/cloning this repo install its dependencies from within a terminal:

```sh
$ npm install
```

### Launch The App

```sh
$ node index
Listening on port 3080
```

Start server on a different port

```sh
$ node index 8089
Listening on port 8089
```

### Simple Example Usage

Test that the service is running as expected by call the status endpoint via curl or in your web browser:

```sh
$ curl localhost:3080/status/302/6
```

Returns response code `302` after a 6 second delay.

#### Server Output

The server echoes each request received. (TODO: include timestamp)

```sh
$ node index
Listening on port 3080
Request => (Response Code: 301, Delay: 0 seconds)
```

## Endpoints Documentation

* **Method GET**: Get endpoints responds with HTTP Status Code and empty content. 
* ~~**Method POST**: Post endpoints responds with HTTP Status Code and data sent by the client as part of request~~. (Not available yet)

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


