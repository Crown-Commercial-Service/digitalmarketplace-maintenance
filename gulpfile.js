var gulp = require('gulp')
var concatcss = require('gulp-concat-css')
var csso = require('gulp-csso')
var gcmq = require('gulp-group-css-media-queries');
var cssbeautify = require('gulp-cssbeautify')
var uncss = require('gulp-uncss');
var replace = require('gulp-replace');
var browsersync = require('browser-sync').create();

function buildCSS(gulp, src_files, dest_file) {
  if (!(src_files instanceof Array)) {
    src_files = src_files.split(',')
  }

  return gulp.src(src_files)
    .pipe(concatcss(dest_file))
    .pipe(gcmq())
    .pipe(csso({
      sourceMap: true,
      debug: true
    }))
    .pipe(cssbeautify({
      indent: '  ',
      autosemicolon: true
    }))
    .pipe(uncss({
      html: ['maintenance.html'],
      timeout: 100
    }))
    .pipe(replace(
      'url(images',
      'url(https://assets.publishing.service.gov.uk/static/images'
    ))
    .pipe(gulp.dest('dist/'));
}

gulp.task('default', function (){

  // build main css files
  buildCSS(gulp, ['src/govuk-template.css', 'src/application.css'], 'main.css');

  // build ie8 css files
  buildCSS(gulp, ['src/govuk-template-ie8.css', 'src/application-ie8.css'], 'ie8.css');
})

gulp.task('bs', function() {
  browsersync.init({
    server: {
      baseDir: '.'
    },
  })
})
