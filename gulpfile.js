var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass', function() {

    return gulp.src('./site/_sass/main.scss')
    .pipe(sass({
        includePaths: [
          './node_modules/normalize-sass'
        ]
    }).on('error', sass.logError))
    .pipe(gulp.dest('./site/css'))

})
gulp.task('default', ['sass'])

gulp.task('watch', ['default'], function() {
    gulp.watch('./site/_sass/**/*.scss', ['sass'])
})
