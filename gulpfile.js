var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var less = require('gulp-less');
var refresh = require('gulp-livereload');
var lr = require('tiny-lr');
var server = lr();
var minifyCSS = require('gulp-minify-css');
var embedlr = require('gulp-embedlr');
var browserSync = require('browser-sync').create();

var autoRestart = require('gulp-auto-restart');
autoRestart({'task': 'watch'});
var moment = require('moment');
moment().format();

var resCss = [
        './dnn/css/res/bootstrap.css',
        './dnn/css/res/font-awesome.css',
        './dnn/css/res/angular-datepicker.css'
        ]

var resJs = [
        './dnn/js/res/angular.js',
        './dnn/js/res/angular-route.js',
        './dnn/js/res/angular-datepicker.js',
        './dnn/js/res/timepicker.js',
        './dnn/js/res/moment.js'
        ]

var js = [
        './dnn/js/app.js',
        './dnn/js/service/*.js',
        './dnn/js/directive/*.js',
        './dnn/js/controller/*.js'
        ]


gulp.task('scripts', function() {
  gulp.src(resJs)
        .pipe(sourcemaps.init())
        .pipe(uglify({ mangle: false }))
        .pipe(concat('resources.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/js'));

    gulp.src(js)
        .pipe(sourcemaps.init())
        .pipe(uglify({ mangle: false }))
        .pipe(concat('script.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(refresh(server))
        .pipe(browserSync.stream({match: '**/*.js'}))
})


gulp.task('styles', function() {
    gulp.src(resCss)
        .pipe(sourcemaps.init())
        .pipe(minifyCSS())
        .pipe(concat('resources.css'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./dist/css'));

    gulp.src(['./dnn/css/style.less'])
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css'))
        .pipe(refresh(server))
        .pipe(browserSync.stream({match: '**/*.css'}))
})

gulp.task('fonts', function() {
  gulp.src('./dnn/fonts/**.*')
        .pipe(gulp.dest('./dist/fonts'));
})

gulp.task('browser-sync', function() {
    browserSync.init({
        injectChanges: true,
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('uib', function(){
        gulp.src('./dnn/uib/**/*')
            .pipe(gulp.dest('./dist/uib'));
})

gulp.task('lr-server', function() {
    server.listen(35729, function(err) {
        if(err) return console.log(err);
    });
})

gulp.task('html', function() {
    gulp.src("./dnn/index.html")
        .pipe(embedlr())
        .pipe(gulp.dest('./dist'));
        
    gulp.src("./dnn/pages/*.html")
        .pipe(embedlr())
        .pipe(gulp.dest('./dist/pages'))
        .pipe(refresh(server))
        .pipe(browserSync.stream({match: '**.html'}));
})

gulp.task('serve', function() {
    
    gulp.run('lr-server', 'fonts', 'uib', 'scripts', 'styles', 'html', 'browser-sync');

    gulp.watch('./dnn/js/**', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('./dnn/css/**', function(event) {
        gulp.run('styles');
    })

    gulp.watch('./dnn/**/*.html', function(event) {
        gulp.run('html');
    })
})