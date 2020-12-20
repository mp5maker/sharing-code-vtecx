const path = require("path");

const extraNodeModules = {
    "@web": path.join(__dirname, "..", "web-app/src"),
};

const watchFolders = [path.join(__dirname, "..", "web-app/src")];

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    resolver: {
        extraNodeModules: new Proxy(extraNodeModules, {
            get: (target, name) => {
                return  name in target
                    ? target[name]
                    : path.join(process.cwd(), `node_modules/${name}`)
            }
        }),
    },
    watchFolders
};
