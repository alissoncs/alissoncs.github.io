var gulp = require('gulp');

var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		sass = require('gulp-sass');


// javascript parse
gulp.task('js', function(){

	gulp.src(['./src/js/**/*.js'])
	.pipe(uglify())
	.pipe(concat('app.min.js'))
	.pipe(gulp.dest('./dest/js/'));

});

gulp.task('sass', function(){

	gulp.src(['./src/sass/main.scss'])
	.pipe(
		// sass
		sass({
			style: 'compressed',
			lineNumbers: false,
			sourcemap: false,
			includePaths: []
		})
		//error handler
		.on('error', sass.logError)
	)
	// concat
	.pipe(concat('style.min.css'))
	// dest
	.pipe(gulp.dest('./dest/css/'));

});

gulp.task('watch', function(){
	gulp.watch('./src/js/**/*.js', ['js']);
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass']);