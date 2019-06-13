/**
 * Settings
 * Set final names for the compiled js and css files
 */


const settings = {
  scss: {
    name: 'index',
    suffix: 'min'
  },
  js: {
    name: 'index',
    suffix: 'min'
  }
}


/**
 * Paths to project folders
 */

const paths = {
	input: 'src/',
	output: 'dist/',
	js: {
		input: ['src/js/modernizr.js', 'src/js/index.js'],
		output: 'dist/js/'
	},
	scss: {
		input: 'src/scss/**/*.scss',
		output: 'dist/css/'
	},
	svgs: {
		input: 'src/svg/**/*.svg',
		output: 'dist/svg/'
	},
	html: {
		input: 'src/**/*',
		output: 'dist/'
	},
	reload: './dist/'
};


/**
 * Project dependencies
 */

const gulp = require('gulp');
const {series} = require('gulp');
const {parallel} = require('gulp');
const del = require('del');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');

// Styles
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const modernizr = require('gulp-modernizr');
const autoprefixer = require('gulp-autoprefixer');

// Scripts
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


/**
 * Gulp Tasks
 */

// Copy all HTML files
function copyHtml() {
  return gulp.src(paths.html.input)
    .pipe(gulp.dest(paths.html.output));
}

// Copy all SVG files
function copySvgs() {
  return gulp.src(paths.svgs.input)
    .pipe(gulp.dest(paths.svgs.output));
}

// Compile and minify Sass Scss files
function compileScss() {
  return gulp.src(paths.scss.input)
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsole: true,
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({

      cascade: false
    }))
    .pipe(rename({suffix: '.' + settings.scss.suffix}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scss.output))
    .pipe(browserSync.stream());
}

// Compile and minify JS files
function compileJs() {
  return gulp.src(paths.js.input)
    .pipe(concat(settings.js.name + '.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.' + settings.js.suffix}))
    .pipe(gulp.dest(paths.js.output));
}

// Delete output folder
function clean() {
  return del([output]);
}

// Update files and reload browser when there are changes in the source files
function watch() {
  browserSync.init({
    server: {
      baseDir: paths.reload
    }
  });

  gulp.watch(paths.html.input, copyHtml);
  gulp.watch(paths.svgs.input, copySvgs);
  gulp.watch(paths.scss.input, compileScss);
  gulp.watch(paths.js.input, compileJs);
  gulp.watch(paths.input + '/**/*').on('change', browserSync.reload)
}


/**
 * Export Tasks
 */

exports.serve = series([parallel(copyHtml, copySvgs, compileScss, compileJs)], watch);
