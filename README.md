# Local Testing API Response Codes

A mock REST API endpoint that'll return whichever status code you request after an `n` second delay, specified by you.

## Simple Example Usage

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

## Documentation

* **Method GET**: Get endpoints responds with HTTP Status Code and empty content. 
* **Method POST**: Post endpoints responds with HTTP Status Code and data sent by the client as part of request. 

Detailed individual endpoint information is given bellow.

--

### GET `/random`

* Gets random HTTP Status Code
* Usage: `http://localhost/api/random/{delay}`
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

**Notes**	Delay value must to be between 1 and 600 else value is ignored and response is returned immediately. 
