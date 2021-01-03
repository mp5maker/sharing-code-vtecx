export const SSRPDF =
`import * as vtecxapi from 'vtecxapi'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'


interface User {
    firstName: string,
    lastName: string
}

const formatName = (user: User) => {
    return \`\${user.firstName} \${user.lastName}\`
}

const user: User = {
    firstName: vtecxapi.getQueryString('firstName'),
    lastName: vtecxapi.getQueryString('lastName')
}

const styles = {
    page: {
        // size: \`A4\`,
        // orientation: \`potrait\`
    },
    table: {
        backgroundColor: '#FFEC8B',
        frame: 'box',
        cellspacing: '3',
        cellpadding: '3',
        width: '90%',
        align: 'left'
    }
}


const element = (
    <html>
        <body>
            <div className={\`_page\`} style={styles.page}>
                <table style={styles.table}>
                    <tr>
                        <td>
                            <p>
                                { formatName(user) }!
                            </p>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    </html>
)

const html = ReactDOMServer.renderToStaticMarkup(element)

vtecxapi.toPdf(1, html, \`\${vtecxapi.getQueryString("fileName")}.pdf\`);
`