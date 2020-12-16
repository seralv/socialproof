const gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('sass', () => 
    gulp.src('./scss/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./css'))
);

// gulp.task('default', () => {
//     gulp.watch('src/scss/*.scss', gulp.series('sass'));
// });

gulp.watch("./scss/**/*.scss", gulp.task('sass'));