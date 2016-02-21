var gulp = require('gulp');

var gulp = require('gulp'),
		uglify = require('gulp-uglify'),
		concat = require('gulp-concat'),
		sass = require('gulp-sass');


// javascript parse
gulp.task('js', function(){

	gulp.src(['./src/js/**/*.js'])
	.pipe(uglify())
	.pipe(concat('javascript.min.js'))
	.pipe(gulp.dest('./dest/js/'));

});

gulp.task('sass', function(){

	gulp.src(['./src/sass/main.scss'])
	.pipe(
		sass({
			style: 'compressed',
			errLogToConsole: true,
			lineNumbers: false,
			sourcemap: false,
			includePaths: [
				'node_modules/bourbon/app/assets/stylesheets/',
				'node_modules/support-for/sass/',
				'node_modules/normalize-scss/sass/'
			]
		})
		.on('error', sass.logError)
	)
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('./dest/css/'));

});

gulp.task('watch', function(){
	gulp.watch('./src/js/**/*.js', ['js']);
	gulp.watch('./src/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass']);