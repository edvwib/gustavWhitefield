<?php

declare(strict_types=1);

// Register plugin helpers.
require template_path('includes/plugins/plate.php');

// Set theme defaults.
add_action('after_setup_theme', function () {
    // Disable the admin toolbar.
    show_admin_bar(true);

    // Add post thumbnails support.
    add_theme_support('post-thumbnails');

    // Add title tag theme support.
    add_theme_support('title-tag');

    // Add HTML5 theme support.
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'widgets',
    ]);

    // Register navigation menus.
    register_nav_menus([
        'navigation' => __('Navigation', 'wordplate'),
    ]);
});

// Remove JPEG compression.
add_filter('jpeg_quality', function () {
    return 100;
}, 10, 2);


// Load custom post types, fields and blocks
add_action('init', function () {
    require_once template_path('custom-post-types/index.php');
    require_once template_path('custom-fields/index.php');
    require_once template_path('custom-admin-cols/index.php');
    require_once template_path('custom-taxonomies/index.php');
});

// Load custom API endpoints
require_once template_path('custom-endpoints/index.php');


add_action('admin_init', 'hide_page_title_for_editors');
function hide_page_title_for_editors()
{
    if (current_user_can('editor'))
        remove_post_type_support('page', 'title');
}
