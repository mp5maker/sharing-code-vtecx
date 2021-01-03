export const SimpleBigQueryGet =
`import * as vtecxapi from 'vtecxapi'

const offset = vtecxapi.getQueryString("offset");
const limit = vtecxapi.getQueryString("limit")
const search = vtecxapi.getQueryString("search")
const yoga = vtecxapi.getQueryString("yoga")

let sql =
    "SELECT f.key, name, japanese_name, email, gender, company_name, job_title, age, country, yoga, description, k.updated  FROM photon_business_test.user AS f" +
    " RIGHT JOIN (SELECT key, max(updated) AS updated FROM photon_business_test.user GROUP BY key) as k" +
    " ON f.updated = k.updated AND f.key = k.key WHERE f.deleted = FALSE"

if (search) {
    sql += \` AND (REGEXP_CONTAINS(name, r'\${search}') OR REGEXP_CONTAINS(email, r'\${search}') OR REGEXP_CONTAINS(description, r'\${search}'))\`;
}

if (yoga) {
    sql += \` AND (REGEXP_CONTAINS(yoga, r'\${yoga}')\`;
}

if (offset !== null && offset !== undefined && limit !== null && limit !== undefined) {
    sql += \` LIMIT \${limit} OFFSET \${offset}\`;
}

const result: VtecxApp.Entry[] = vtecxapi.getBQ(sql);
vtecxapi.log("GET USER BIG QUERY ::::", JSON.stringify(result));

const modifyResult = result.map((perResult) => {
    const { key, updated, deleted, ...requiredData }: any = perResult

    return {
        user: {
            ...requiredData
        },
        updated,
        link: [
            {
                ___href: key,
                ___rel: "self"
            }
        ]
    };
})

vtecxapi.doResponse(modifyResult, 200)
`

export const SimpleBigQueryPost =
`import * as vtecxapi from "vtecxapi";
import get from 'lodash/get'

const clientData = vtecxapi.getRequest()
if (Array.isArray(clientData) && clientData.length > 0) {
    const UUID = vtecxapi.addids("/users", 1);
    const firstClientData = clientData[0]
    const user = get(firstClientData, 'user', {})

    const requestData = {
        feed: {
            entry: [
                {
                    user,
                    link: [{
                        ___rel: "self",
                        ___href: \`/users/\${UUID}\`
                    }]
                }
            ]
        }
    };

    try {
        vtecxapi.log("POST USER BIG QUERY ::::", JSON.stringify(requestData))
        vtecxapi.postBQ(requestData, false);

        vtecxapi.log("POST USER DATABASE::::", JSON.stringify(requestData))
        vtecxapi.post(requestData, "/users");

        vtecxapi.log("POST USER DATA ::::", JSON.stringify(requestData))
        vtecxapi.doResponse(requestData)
    } catch(error) {
        vtecxapi.sendError(400, error)
    }
} else {
    vtecxapi.log("POST USER DATA STRUCTURE NOT CORRECT::::", "Please fix the shape of the object of user");
    vtecxapi.sendError(400, "POST_USER_DATA_STRUCTURE_NOT_CORRECT");
}`

export const SimpleBigQueryPut =
`import * as vtecxapi from "vtecxapi";
import get from 'lodash/get'

const clientData = vtecxapi.getRequest()
if (Array.isArray(clientData) && clientData.length > 0) {
    const firstClientData = clientData[0]
    const user = get(firstClientData, 'user', {})
    const link = get(firstClientData, 'link', [])

    const requestData = {
        feed: {
            entry: [
                {
                    user,
                    link
                }
            ]
        }
    };

    try {
        vtecxapi.log("POST USER BIG QUERY ::::", JSON.stringify(requestData))
        vtecxapi.postBQ(requestData, false);

        vtecxapi.log("POST USER DATABASE::::", JSON.stringify(requestData))
        vtecxapi.put(requestData);

        vtecxapi.log("POST USER DATA ::::", JSON.stringify(requestData))
        vtecxapi.doResponse(requestData)
    } catch(error) {
        vtecxapi.sendError(400, error)
    }
} else {
    vtecxapi.log("POST USER DATA STRUCTURE NOT CORRECT::::", "Please fix the shape of the object of user");
    vtecxapi.sendError(400, "POST_USER_DATA_STRUCTURE_NOT_CORRECT");
}
`;

export const SimpleBigQueryDelete =
`import * as vtecxapi from 'vtecxapi'
import get from 'lodash/get'


const clientData = vtecxapi.getRequest();
if (Array.isArray(clientData) && clientData.length > 0) {
    const firstClientData = clientData[0];
    const linkData = get(firstClientData, "link", []);
    const firstLinkData = linkData[0];
    const ID = get(firstLinkData, "___href", "").replace(/ /g, "");
    const hasUserData = vtecxapi.getEntry(ID);

    if (hasUserData) {
        try {
            vtecxapi.log("DELETE USER ID ::::", ID);
            vtecxapi.deleteEntry(ID)
            vtecxapi.log("DELETE USER DATABASE ::::", 'Deleted Entry');
            vtecxapi.deleteBQ([ID], false, { users: "users" });
            vtecxapi.log("DELETE BIQ QUERY USER ::::", JSON.stringify(hasUserData));
        } catch (error) {
            vtecxapi.sendError(400, error);
        }
    } else {
        vtecxapi.log("DELETE USER DO NOT EXIT ::::", "User do not exist");
        vtecxapi.sendError(400, "USER_DO_NOT_EXIST");
    }
}
`;
