export const AddUserByAdmin = `import * as vtecxauth from 'vtecxauth'

const email = "john.doe@gmail.com"
const rawPassword = "secret"
const hashpass = vtecxauth.getHashpass(rawPassword)
const requestData = {
    feed: {
        entry: [
            {
                contributor: [
                    {
                        uri: "urn:vte.cx:auth:" + email + "," + hashpass,
                        name: username
                    }
                ]
            }
        ]
    }
};

axios.post("/d/?_adduserByAdmin", requestData);
`;


export const UserAdmin = `
const is_user_admin_group = false // true or false (if you want to give useradmin privileges then use true)
const uid = [uid from /d/?_adduserByAdmin]
const requestData = {
    feed: {
        entry: [
            {
                link: [
                    {
                        ___href: '/_group/$useradmin/' + uid,
                        ___rel: 'self'
                    },
                    {
                        ___href: '/_user/' + uid + '/group/$useradmin',
                        ___rel: 'alternate'
                    }
                ]
            }
        ]
    }
};

axios.put(\`/d /\`, requestData)
    .then(onSuccessUserAdmin)
    .catch(onErrorUserAdmin)
`;

