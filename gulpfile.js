var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function() {
	return sass('sass/gnome-shell.scss')
		.on('error', sass.logError)
		.pipe(gulp.dest('.'));
});

gulp.task('default', function () {
  gulp.watch('sass/*.scss', ['sass']);
});