import esbuild from 'esbuild'
import fs from 'fs'
import path from 'path'
import { sassPlugin } from 'esbuild-sass-plugin'
import { dev } from "local-dev-server"
import pkg from "./package.json" assert {type: "json"}
const [mode] = process.argv.splice(2)
const entryPoints = ["./src/index.jsx"]
const externalRegxes = []
for (let key in pkg.externals ?? {}) {
    const filter = new RegExp(`^${key}$`)
    externalRegxes.push({
        filter,
        path: pkg.externals[key]
    })
}
const externalPlugin = {
    name: 'external',
    setup(build) {
        build.onResolve({ filter: /^\// }, args => {
            return {
                path: args.path,
                external: true
            }
        })
        for (let rule of externalRegxes) {
            build.onResolve({ filter: rule.filter }, args => {
                console.log("find rule", rule)
                return {
                    path: rule.path,
                    external: true
                }
            })
        }

    },
}
const options = {
    jsxFactory: 'h',
    jsxFragment: 'h.f',
    format: "esm",
    bundle: true,
    sourcemap: true,
    minify: true,
    charset: 'utf8',
    entryPoints,
    external: ['omii', "omii-ui"], //externalPlugin 指定了静态导入，如果pkg中去除设置，可以使用动态importmap
    outdir: `./dist`,
    plugins: [
        externalPlugin,
        sassPlugin({
            type: "css-text"
        })],
}

if (mode == "dev") {
    let buildResult = null
    const response = (filePath, res) => {
        const outfile = buildResult?.outputFiles.find(file => file.path == filePath)
        if (outfile) {
            res.setHeader('Content-Type', 'application/javascript;charset=utf-8');
            res.end(outfile.contents)
            return true
        }
        return false;
    }
    const { reload } = dev({ ...pkg.localDev.server, response }, pkg.localDev.proxy)
    esbuild.build({
        ...options,
        write: false,
        outdir: `./`,
        watch:
        {
            onRebuild(error, result) {
                if (error) console.error('watch build failed:', error)
                else {
                    buildResult = result
                    console.log('watch rebuild succeeded:')
                    reload("solution rebuild ok")
                }
            },
        }
    }).then(result => {
        buildResult = result

    })
}
else if (mode == "prod") {
    esbuild.build(options).then(result => {
        console.log(`build  ok!`)
    })
    fs.cpSync('index.html', path.join('./dist', "index.html"))
    fs.cpSync('es-lib', path.join('./dist', "es-lib"), { recursive: true })
    fs.cpSync('contents', path.join('./dist', "contents"), { recursive: true })
}