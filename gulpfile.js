var gulp  = require('gulp'),
    gutil = require('gulp-util');
const { task } = require('gulp');

// create a default task
task('default', function(cb) {
    cb();
    return gutil.log('Default Task! complete');
});

//create the build task
task('build', function(cb) {
    cb();
    return gutil.log('Build Task! complete');
});
const { src, dest } = require('gulp');
task('copyfiles', function(cb) {
    cb();
    gutil.log('Copy css files to output ! complete');
    return src('assets/css/*.css')
        .pipe(dest('output/'));
});
const { watch } = require('gulp');

watch(['assets/css/*.css'], function(cb) {
    cb();
    gutil.log('Copy css files to output ! changes complete');
    return src('assets/css/*.css')
        .pipe(dest('output/'));
});


var Server = require('karma').Server;

/**
 * Run test once and exit
 */
task('testkarma', function (done) {

    new Server({
        configFile:'/Users/bmuchira/Documents/myprojects/homestead/project_files/work/gulp_n_karma/my.conf.js',
        singleRun: false
    }, done).start();
});

gulp.task('default', gulp.series('build','copyfiles'));
