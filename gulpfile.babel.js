import gulp from 'gulp';
import del from 'del';
import { exec } from 'child_process';
import poststylus from 'poststylus';
import merge from 'merge-stream';

const browserSync = require('browser-sync').create();
const autoprefixer = require('autoprefixer')({ browsers: ['last 2 versions'] });
const plugins = require('gulp-load-plugins')();

// ==================================================
//                Configurations
// ==================================================

const stylusConfig = {
    use: [
        poststylus([
            autoprefixer,
        ]),
    ],
};

const uglifyConfig = {
    compress: {
        dead_code: true,
        unused: true,
        drop_debugger: true,
        drop_console: true,
    },
};

const styleHeader =
`/*
Theme Name: ALiEM
Template: Avada
*/
`;

// ==================================================
//                     Utility
// ==================================================
gulp.task('del', done => (
    del(['dist/aliem/**', '!dist/aliem']).then(() => done())
));

gulp.task('reload', (done) => { browserSync.reload(); done(); });

gulp.task('chown', (done) => {
    exec("ls -l dist/ | awk '{print $3}' | tail -n -1", (err, stdout) => {
        if (stdout.trim() === process.env.USER) {
            done();
            return;
        }
        exec(`sudo chown -R ${process.env.USER} ${process.env.PWD}`, () => {
            done();
        });
    });
});

// ==================================================
//                     Static
// ==================================================
gulp.task('static', () => {
    const php = gulp
        .src([
            'aliem/**/*.php',
            'aliem/**/*.css',
        ], { base: './' })
        .pipe(gulp.dest('dist'));

    const svg = gulp
        .src('aliem/assets/*.svg', { base: './' })
        .pipe(plugins.svgmin())
        .pipe(gulp.dest('dist'));

    return merge(php, svg);
});

// ==================================================
//                     Styles
// ==================================================

gulp.task('stylus:dev', () => {
    const main = gulp
        .src('aliem/styles/style.styl', { base: './aliem/styles' })
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.stylus(stylusConfig))
        .pipe(plugins.insert.prepend(styleHeader))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/aliem'))
        .pipe(browserSync.stream({ match: '**/*.css' }));
    const editor = gulp
        .src('aliem/styles/editor-style.styl', { base: './aliem/styles' })
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.stylus(stylusConfig))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('dist/aliem'))
        .pipe(browserSync.stream({ match: '**/*.css' }));

    return merge(main, editor);
});

gulp.task('stylus:prod', () => {
    const main = gulp
        .src('aliem/styles/style.styl', { base: './aliem/styles' })
        .pipe(plugins.stylus(Object.assign({}, stylusConfig, { compress: true })))
        .pipe(plugins.insert.prepend(styleHeader))
        .pipe(gulp.dest('dist/aliem'));

    const editor = gulp
        .src('aliem/styles/editor-style.styl', { base: './aliem/styles' })
        .pipe(plugins.stylus(Object.assign({}, stylusConfig, { compress: true })))
        .pipe(gulp.dest('dist/aliem'));

    return merge(main, editor);
});

gulp.task('_build', gulp.series('chown', 'del', gulp.parallel('static', 'stylus:prod')));

gulp.task('_dev', gulp.series(
    'chown', 'del',
    gulp.parallel('static', 'stylus:dev'), () => {
        browserSync.init({
            proxy: 'localhost:8080',
        });

        gulp.watch('aliem/**/*.styl', gulp.series('stylus:dev'));

        gulp.watch([
            'aliem/**/*',
            '!aliem/**/*.styl',
        ], gulp.series('static', 'reload'));
    }));


// ==================================================
//               Plugin/Theme Fixes
// ==================================================

const avada = {
    imageSizes: {
        regex: /(\s)(add_action\(.+'add_image_size'.+)/g,
        replacement: '$1//$2',
    },
    inlineCss: {
        regex: /(\s)((?:add_action|wp_enqueue_style).+(?:dynamic[-_]css|inline_css).+)/g,
        replacement: '$1//$2',
    },
    dynamicCssNoop: {
        regex: /^(function avada_dynamic_css_cached\(\) {\n)(?! {4}return)/gm,
        replacement: '$1    return null;\n',
    },
};


gulp.task('fix-theme', () => {
    const classAvadaInit = gulp
        .src('./wp-content/themes/Avada/includes/class-avada-init.php', { base: './' })
        .pipe(plugins.replace(avada.imageSizes.regex, avada.imageSizes.replacement))
        .pipe(gulp.dest('./'));

    const classAvadaDynamicCss = gulp
        .src('./wp-content/themes/Avada/includes/class-avada-dynamic-css.php', { base: './' })
        .pipe(plugins.replace(avada.inlineCss.regex, avada.inlineCss.replacement))
        .pipe(gulp.dest('./'));

    const dynamicCssNoop = gulp
        .src('./wp-content/themes/Avada/includes/dynamic_css_helpers.php', { base: './' })
        .pipe(plugins.replace(avada.dynamicCssNoop.regex, avada.dynamicCssNoop.replacement))
        .pipe(gulp.dest('./'));

    return merge(classAvadaDynamicCss, classAvadaInit, dynamicCssNoop);
});

gulp.task('shrink-plugin', () => {
    if (!process.argv[3]) {
        console.log("You must specify a plugin directory name (eg. '--academic-bloggers-toolkit')"); // eslint-disable-line
        process.exit();
    }
    const plugin = process.argv[3].substring(2);

    const js = gulp
        .src(`wp-content/plugins/${plugin}/**/*.js`, { base: './' })
        .pipe(plugins.uglify(uglifyConfig))
        .pipe(gulp.dest('.'));

    const css = gulp
        .src(`wp-content/plugins/${plugin}/**/*.css`, { base: './' })
        .pipe(plugins.csso())
        .pipe(gulp.dest('.'));

    return merge(css, js);
});
