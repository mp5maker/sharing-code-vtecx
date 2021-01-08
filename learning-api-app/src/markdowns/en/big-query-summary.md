Some of the new functions have been introduced for vtecxapi
Let us assume the file to be here: src/server/sample.tsx

Example of vtecxapi.getQueryString("your-sample-string")

```
axios.get("/s/sample?foo=hello")
```

```
vtecxapi.getQueryString("foo") // hello
```
<br/><br/>


Example of vtecxapi.getBQ(YOUR_SQL)

```
axios.get("/s/sample")
```

```
vtecxapi.getBQ("SELECT * FROM your_table_name")
```
<br/><br/>

Example of vtecxapi.log("title", "content")
Helpful for logging in the vtecx admin panel

```
vtecxapi.log("GET USER BIG QUERY ::::", JSON.stringify(RESULT))
```
<br/><br/>

Example of vtecxapi.log("title", "content")
Helpful for logging in the vtecx admin panel

```
axios.post("/s/sample", [{ user }])
```
<br/><br/>


Example of vtecxapi.getRequest()

```
vtecxapi.getRequest()  // whole user object
```
<br /><br />

Example of saving in BigQuery

```
vtecxapi.postBQ(data, false) // save to to BigQuery
```
<br /><br />

Example of simple post

```
vtecxapi.post(data, false) // save to to BigQuery
```
<br /><br />

Example of updating in BigQuery

```
vtecxapi.postBQ(data, false) // update to to BigQuery
```
<br /><br />


Example of simple put

```
vtecxapi.put(data, false) // save to database
```
<br /><br />

Example of simple error

```
vtecxapi.sendError(400, error) // save to database
```
<br /><br />

Example of response

```
vtecxapi.doResponse(requestData)
// return response please match it with the templates.xml or else the response will not return properly
```
<br /><br />

Example of getEntry

    vtecxapi.getEntry(ID) // Gives a specific data
<br /><br />

Example of deleteEntry

    vtecxapi.deleteEntry(ID) // deletes the data from the database
<br />

Example of delete entry for BigQuery

```
vtecxapi.deleteBQ([ID], false, { users: "users" });
```
