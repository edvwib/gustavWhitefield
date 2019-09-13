<?php get_header();

if (env('WP_ENV', 'default') === 'production') {
    require('web-app/index.html');
}

get_footer();
