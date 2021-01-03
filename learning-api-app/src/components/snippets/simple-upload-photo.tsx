export const SimpleUploadServerPhoto =
`import * as vtecxapi from 'vtecxapi'

interface Param {
    profile_photo: string
}

const param: Param = {
    profile_photo: vtecxapi.getQueryString('profile_photo')
}

vtecxapi.saveFiles(param)`;

export const SimpleUploadClientPhoto =
`formData.append("profile_photo", file);
const param = \`profile_photo=/_html/img/profile_photo\`;

axios({
    url: \`/s/save-profile-photo?$\{param\}\`,
    method: \`post\`,
    data: formData
}).then(onSuccessUpload)
    .catch(onErrorUpload)
`

export const SimpleGetClientPhoto =
  `axios
    .get("/d/_html/img/profile_photo")
    .then(onSuccess)
    .catch(onError);`;