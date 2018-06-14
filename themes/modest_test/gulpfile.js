//  Le gulp de MADGID etait la :-)
var gulp = require('gulp');

// Mes Plugins
var sass = require('gulp-sass');

// Task
gulp.task('sass', function() {
    gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
});

gulp.task('default', function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});