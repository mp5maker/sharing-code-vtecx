export const SendEmail =
`import * as vtecxapi from 'vtecxapi'

const mailentry = {
    'entry': {
        'title': 'Sendmail test',
        'summary': 'hello text mail',
        'content': {
            '______text': '<html><body>hello html mail <img src="CID:/_html/img/ajax-loader.gif"></body></html>'
        }
    }
}


const to = ["john.doe@gmaill.com"];
const cc = ["john.doe@gmail.com"];
const bcc = ["john.doe@gmail.com"];
const attachments = ["/_html/img/vtec_logo.png"];

vtecxapi.sendMail(mailentry, to, cc, bcc, attachments);
vtecxapi.doResponse({})
`;