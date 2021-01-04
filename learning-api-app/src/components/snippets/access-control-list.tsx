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

export const OneWayToLogin = ` const rxid = vtecxauth.getRXID(
    email,
    password,
    serviceName,
    apiKey
  );

  const loginWithAccessToken = ({ onSuccessAuth }: any = {}) => {
    const onSuccessGetAccessToken = (getAccessTokenResponse: any) => {
        const accessToken = get(getAccessTokenResponse, 'data.feed.title', '')
    }

    apiHelper.me.getAccessToken()
        .then(onSuccessGetAccessToken)
        .catch(() => {})
  }

  const onSuccessGetCookie = (result: AxiosResponse) => {
      const hasCookie = get(result, 'headers.set-cookie', '')
      if (hasCookie) {
          const cookieFromRequest = result.headers['set-cookie'][0].split(';')[0]
          loginWithAccessToken({
              ...(cookieFromRequest ? {
                  onSuccessAuth: async() => {
                      await AsyncStorage.setItem(REQUEST_COOKIE, cookieFromRequest)
                  }
              }: {})
          })
      } else loginWithAccessToken({})
  }

  apiHelper.me.auth({ rxid })
    .then(onSuccessGetCookie)
    .catch(() => {})
`;

export const AddAclByUid = `const uid = '69920'
// C => create, R => React, U => Update, D => Delete
const permissions = 'R'

let reqdata = {
	feed: {
		entry: [
			{
				link: [
					{
						___rel: 'self',
						___href: '/users'
					}
				],
				contributor: [
					{
						uri: 'urn:vte.cx:acl:/_group/$admin,CRUD'
					},
					{
						uri: 'urn:vte.cx:acl:/_group/$useradmin,CRUD/'
					},
					{
						uri: \`urn:vte.cx:acl:\${uid},\${permissions}\`
					}
				]
			}
		]
	}
}

axios.put('/d/?_post', reqdata)
`;
