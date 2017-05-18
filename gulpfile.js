const conf = require('./gulp.conf');
const babelConf = require('./babel.conf');
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('babel', () => {
    return gulp.src(conf.src.js)
        .pipe(babel(babelConf))
        .pipe(gulp.dest(conf.dist.root));
});

gulp.task('default', ['babel']);