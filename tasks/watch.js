var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task( 'watch', function(){
	livereload.listen();
	gulp.watch( 'src/client/js/*.js', ['lint', 'jscs', 'browserify'] );
});