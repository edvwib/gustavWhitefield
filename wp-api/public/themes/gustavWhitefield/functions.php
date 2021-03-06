<?php

declare(strict_types=1);

add_action('admin_init', function () {
    $user = wp_get_current_user();

    Sentry\configureScope(function (Sentry\State\Scope $scope) use ($user): void {
        $scope->setUser([
            'id' => $user->data->ID,
            'email' => $user->data->user_email,
            'username' => $user->data->user_login,
        ]);
    });
});

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

// Enable SVG upload support
function add_svg_to_upload_mimes($upload_mimes)
{
    $upload_mimes['svg'] = 'image/svg+xml';
    $upload_mimes['svgz'] = 'image/svg+xml';
    return $upload_mimes;
}
add_filter('upload_mimes', 'add_svg_to_upload_mimes', 10, 1);

// Load custom post types, fields and blocks
add_action('init', function () {
    require_once get_theme_file_path('custom-post-types/index.php');
    require_once get_theme_file_path('custom-fields/index.php');
    require_once get_theme_file_path('custom-admin-cols/index.php');
    require_once get_theme_file_path('custom-taxonomies/index.php');
});

// Load custom API endpoints
require_once get_theme_file_path('custom-endpoints/index.php');


add_action('admin_init', 'hide_titles_for_editors');
function hide_titles_for_editors()
{
    if (current_user_can('editor')) {
        remove_post_type_support('page', 'title');
        remove_post_type_support('news', 'title');
    }
}

function hide_permalink()
{
    return '';
}
add_filter('get_sample_permalink_html', 'hide_permalink');

remove_action('template_redirect', 'redirect_canonical');

add_action('admin_head', 'hide_visit_page');

function hide_visit_page()
{
    echo '<style>
        .updated a {
            display: none !important;
        }

        .row-actions .view a {
            display: none !important;
        }

        .row-actions a.editinline {
            display: none !important;
        }

        td.titleSV.column-titleSV {
            display: inline-grid !important;
        }
    </style>';
}
