Uploading photo takes little bit of understanding of the parameters. As you can see, you can send multiple images using vtecxapi very easily. There is some setup that we need to go through to upload the image. First we need to defined in our server side file **src/server/save-profile-photo** what parameter we would be sending from the client side. In the example below, we are using

```
  profile_photo
```

In this profile_photo param we have send an query string which is

```
/_html/img/profile_photo
```

This value indicates where the file should be location and it also allows the user to call the server side and ask for the image

```
<link href="/d/_html/img/profile_photo">
```

/d/_html will be rewritten to /. So it can be omitted.

```
<link href=“/img/profile_photo”>
```

In this way calling image using tags becomes very flexible and allows us to write clean code.

You can save it anywhere in custom locations but before you go and save in there we need to go through User, group management and access control
which we will go through it later

Rule of thumb should be

```
[your-variable-string]: '/d/_html/img/[your-file-name]'
```
