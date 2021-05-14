const {src,dest,series,parallel,watch}=require('gulp')
const browserSync   = require('browser-sync').create();
const sass          = require('gulp-sass')
const concat        = require('gulp-concat')
const sourcemaps    = require('gulp-sourcemaps')
const autoprefixer  = require('gulp-autoprefixer')
const notify        = require('gulp-notify')
const imagemin      = require('gulp-imagemin')
const newer         = require('gulp-newer')
const uglify        = require('gulp-uglify-es').default
const del           = require('del')


function styles(){
    return src('app/sass/style.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', notify.onError()))
    .pipe(autoprefixer({ cascade: false ,overrideBrowserslist:['last 10 versions'],grid:true}))
    .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
}
function scripts(){
    return src(['app/js/**/*.js','!app/js/**/*.min.js'])
    // .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    // .pipe(sourcemaps.write())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream());
}
function images(){
    return src('app/images/img/**/*')
    .pipe(newer('app/images/dist/'))
    .pipe(imagemin())
    .pipe(dest('app/images/dist/'))
}
function copyFiles(){
    return src(['app/images/dist/**/*',
    'app/css/*.min.css',
    'app/js/*.min.js',
    'app/index.html'
    ],{base:'app'})
    .pipe(dest('dist')) 
}
function cleanDist(){
    return del('dist/**/*', { force: true })
}

function watchFiles(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
    watch('app/index.html').on('change',browserSync.reload)
    watch(('app/sass/*.sass'),styles)
    watch(('app/images/img/**/*'),images)
    watch((['app/js/**/*.js','!app/js/**/*.min.js']),scripts)
}

exports.styles=styles
exports.watchFiles=watchFiles
exports.images=images
exports.scripts=scripts

exports.build=series(cleanDist,styles,scripts,images,copyFiles)
exports.default=parallel(styles,scripts,watchFiles)
