var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    rupture = require('rupture'),
    jeet = require('jeet');

gulp.task('templates', ['stylus'], function() {
  gulp.src('./app/views/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'))
});

gulp.task('stylus', function () {
  gulp.src('./app/assets/stylesheets/style.styl')
    .pipe(stylus({ use: [ nib(), rupture(), jeet() ]}))
    .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['templates', 'stylus']);
