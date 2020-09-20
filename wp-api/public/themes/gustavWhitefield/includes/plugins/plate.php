<?php

declare(strict_types=1);

/*
|--------------------------------------------------------------------------
| Plate
|--------------------------------------------------------------------------
|
| Plate provides a bunch of handy WordPress defaults to help you get the
| most out of WordPress development.
|
| Please see https://github.com/wordplate/plate
|
*/

// Disable sidebar menu items.
add_theme_support('plate-disable-menu', [
    current_user_can('editor') ? 'tools.php' : '',
    'edit.php', // default post type
    'edit-comments.php', // comments
    'index.php', // dashboard
    // 'upload.php', // media
]);

// Disable meta boxes in editor.
add_theme_support('plate-disable-editor', [
    'commentsdiv',
    'commentstatusdiv',
    'linkadvanceddiv',
    'linktargetdiv',
    'linkxfndiv',
    'postcustom',
    'postexcerpt',
    'revisionsdiv',
    'slugdiv',
    'sqpt-meta-tags',
    'trackbacksdiv',
    // 'categorydiv',
    //'tagsdiv-post_tag',
]);

// Disable dashboard widgets.
add_theme_support('plate-disable-dashboard', [
    'dashboard_activity',
    'dashboard_incoming_links',
    'dashboard_plugins',
    'dashboard_recent_comments',
    'dashboard_primary',
    'dashboard_quick_press',
    'dashboard_recent_drafts',
    'dashboard_secondary',
    //'dashboard_right_now',
]);

// Disable links from admin toolbar.
add_theme_support('plate-disable-toolbar', [
    'comments',
    'wp-logo',
    'edit',
    'appearance',
    'view',
    'new-content',
    'updates',
    'search',
]);

// Set custom permalink structure.
add_theme_support('plate-permalink', '/%postname%/');

// Set custom login logo.
add_theme_support('plate-login-logo', get_theme_file_uri('assets/images/logo.png'));

// Set custom footer text.
add_theme_support('plate-footer-text', 'Ett unikt Gustav Whitefield tema!');
