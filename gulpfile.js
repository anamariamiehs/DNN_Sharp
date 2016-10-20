var gulp = require('gulp');
// var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var browserSync = require('browser-sync').create();

gulp.task('scripts', function() {
    gulp.src(['./dnn/js/script.js', 'dnn/js/*.js'])
        // .pipe(browserify())
        .pipe(uglify({ mangle: false }))
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(refresh(server))
        .pipe(browserSync.stream({match: '**/*.js'}))
})

gulp.task('styles', function() {
    gulp.src(['dnn/css/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))
        .pipe(refresh(server))
        .pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})

gulp.task('html', function() {
    gulp.src("dnn/index.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist'))
        .pipe(refresh(server));

    gulp.src("dnn/pages/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('dist/pages'))
        .pipe(refresh(server));
})

gulp.task('default', function() {
    gulp.run('lr-server', 'scripts', 'styles', 'html', 'browser-sync');

    gulp.watch('dnn/js/**', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('dnn/css/**', function(event) {
        gulp.run('styles');
    })

    gulp.watch('dnn/**/*.html', function(event) {
        gulp.run('html');
    })
})
