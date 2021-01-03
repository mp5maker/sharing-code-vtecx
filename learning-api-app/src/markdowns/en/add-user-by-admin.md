A new user can be added using **useradmin** privileges or without it

**New User**
First we need to post request to /d/?_adduserByAdmin

**New User With UserAdmin Privileges**
To give the useradmin privileges first we need to post request to /d/?_adduserByAdmin then put request to /_group/$useradmin/