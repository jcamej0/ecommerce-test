const {src, task} = require('gulp');
const eslint = require('gulp-eslint');
 
task('default', () => {
    return src(['src/scenes/**/*.jsx'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
})