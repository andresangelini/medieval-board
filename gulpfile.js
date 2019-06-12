const gulp = require('gulp');
const sass = require('gulp-sass');
const modernizr = require('gulp-modernizr');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

// Copy all HTML files
function copyHtml() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
}

// Copy all SVG files
function copySvgs() {
  return gulp.src('src/svg/**/*.svg')
    .pipe(gulp.dest('dist/svg'));
}

// Compile and minify Sass Scss files
function compileScss() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({

      cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// Compile and minify JS files
function compileJs() {
  return gulp.src(['src/js/modernizr.js', 'src/js/index.js'])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
}

// Update files and reload browser when there are changes in the source files
function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
  gulp.watch('src/**/*.html', copyHtml);
  gulp.watch('src/**/*.svg', copySvgs);
  gulp.watch('src/scss/**/*.scss', compileScss);
  gulp.watch('src/js/**/*.js', compileJs);
  gulp.watch('src/**/*').on('change', browserSync.reload)
}

exports.copyHtml = copyHtml;
exports.copySvgs = copySvgs;
exports.compileScss = compileScss;
exports.compileJs = compileJs;
exports.watch = watch;
