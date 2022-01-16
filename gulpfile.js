const { src, dest, watch, series, task } = require('gulp')
const sassCompiler = require('sass')
const sass = require('gulp-sass')(sassCompiler)
const path = require('path')
const rename = require('gulp-rename')


const mainFile = path.join(__dirname, "src/main.scss")
const partsPath = path.join(__dirname, "src/parts")
const outputPath = path.join(__dirname, "css")
const name = "cssvizo"


const buildStyles = () => {
    return src(mainFile)
        .pipe(sass())
        .pipe(rename(`${name}.css`))
        .pipe(dest(outputPath))
}

const minifyStyles = () => {
    return src(path.join(outputPath, `${name}.css`))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename(`${name}.min.css`))
        .pipe(dest(outputPath))
}

const watchStyles = () => {
    watch([mainFile, partsPath], buildStyles)
}

exports.default = series(buildStyles, watchStyles)
exports.build = series(buildStyles, minifyStyles)