<?php get_header();

if (env('WP_ENV') === 'production') {
    require('web-app/index.html');
}

get_footer();
