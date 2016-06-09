import gulp from 'gulp'
import webpack from 'gulp-webpack'

import { client } from './webpack.config.babel'

gulp.task('build:client', () =>
  gulp.src(client.entry.index)
  .pipe(webpack(client))
  .pipe(gulp.dest(client.output.path))
)

gulp.task('build:production', [ 'build:client' ])
