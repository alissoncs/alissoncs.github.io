const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const connect = require('gulp-connect')
const babel = require('gulp-babel')


gulp.task('connect', () => {
    connect.server({
        root: './dest',
        livereload: true,
        port: 3083,
    });
})

gulp.task('pug', () => {
    return gulp.src('./site/views/*.pug')
    .pipe(pug({
        // pug options here ! :D
    }))
    .pipe(gulp.dest('./dest/'))
})

gulp.task('js', () => {
    return gulp.src('./site/js/main.js')
    .pipe(babel({
        presets: ['env'],
    }))
    .pipe(gulp.dest('./dest/js'))
})

gulp.task('sass', () => {

    return gulp.src('./site/styles/main.scss')
    .pipe(sass({
        includePaths: [
          './node_modules/normalize-sass',
          './node_modules/bootstrap-sass/assets/stylesheets',
        ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'))

})
gulp.task('img', () => {
    gulp.src('./site/img/**.*')
    .pipe(gulp.dest('./dest/img'))
})
gulp.task('default', [ 'pug', 'sass', 'js', 'img' ])

gulp.task('watch', [ 'default', 'connect'], function() {
    gulp.watch('./site/styles/**/*.scss', ['sass'])
    gulp.watch('./site/views/**/*.pug', ['pug'])
    gulp.watch('./site/js/**/*.js', ['js'])
})
