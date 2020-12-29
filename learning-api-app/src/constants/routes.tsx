interface RouterPropsInterface {
    path: string
    alternatePath?: string
    shortPath?: string
    anotherPath?: string
    state: string
    name: string
}

export const HOME: RouterPropsInterface = {
    path: '/home',
    alternatePath: '/',
    anotherPath: '/index.html',
    state: 'home',
    name: "HOME"
}