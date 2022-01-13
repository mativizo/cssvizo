const { src, dest, watch, series } = require('gulp')
const sassCompiler = require('sass')
const sass = require('gulp-sass')(sassCompiler)
const path = require('path')

const mainPath = path.join(__dirname, "src")
const mainFile = path.join(mainPath, "main.scss")
const partsPath = path.join(mainPath, "parts")

const buildStyles = () => {
    return src(mainFile)
        .pipe(sass())
        .pipe(dest('css'))
}

const watchStyles = () => {
    watch([mainFile, partsPath], buildStyles)
}

exports.default = series(buildStyles, watchStyles)