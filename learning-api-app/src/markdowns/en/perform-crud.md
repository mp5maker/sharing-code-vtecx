We will go through the create (post), read, update(put/patch), delete(delete).
We will perform simple create, update, delete and later on dive deep into get/read requests

if you are using axios please configure as below

    axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

<table>
    <thead>
        <tr>
            <th><strong>Type</strong></th>
            <th><strong>Description</strong></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>e</td>
            <td>metadata</td>
        </tr>
        <tr>
            <td>f</td>
            <td>feed</td>
        </tr>
        <tr>
            <td>x</td>
            <td>xml</td>
        </tr>
    </tbody>
</table>


```
        /d/ represents the workings related to the relational database <br/>
```
**http://localhost:8000/d/** <br/>

```
    /s/ represets the workings related to the custom server files which we will go through it later <br/>
```
**http://localhost:8000/s/** <br/>

```
f retrieves the entries under the entry list in the form json <br/>
```
**http://localhost:8000/d/users?f** <br/>

```
?e&x retrieves the metadata of the entry <br/>
```
**http://localhost:8000/d/users?e&x** <br/>

```
?x&f this retrieves the entries under the entry list in form xml <br/>
```
**http://localhost:8000/d/users?x&f** <br/>

This can be very helpful when debugging the endpoint using the browser
