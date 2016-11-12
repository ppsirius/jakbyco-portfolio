/* eslint-disable import/no-extraneous-dependencies */

import gulp from 'gulp';
import eslint from 'gulp-eslint';
import del from 'del';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

const paths = {
  allSrcJs: 'src/js/**/*.js',
  gulpFile: 'gulpfile.babel.js',
  clientEntryPoint: 'src/js/index.js',
  webpackFile: 'webpack.config.babel.js',
  distDir: 'dist/js',
};

// @todo postcss
// @todo html compiler + emoji tag

gulp.task('clean', () => del(paths.libDir));

gulp.task('main', ['clean'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distDir))
);

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
});

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile,
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('default', ['watch', 'main']);
