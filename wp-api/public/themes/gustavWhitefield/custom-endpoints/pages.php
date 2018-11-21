<?php

declare (strict_types = 1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/pagesLastUpdated', [
        'methods' => 'GET',
        'callback' => 'getPagesLastUpdated'
    ]);
    register_rest_route('api/v1', '/pages/', [
        'methods' => 'GET',
        'callback' => 'getAllPages'
    ]);
});

function getPagesLastUpdated()
{
    global $wpdb;
    return strtotime($wpdb->get_results(
        "SELECT post_modified_gmt
        FROM wpl_posts
        WHERE post_type='page'
        ORDER BY post_modified_gmt
        DESC LIMIT 1"
    )[0]->post_modified_gmt);
}

function getAllPages()
{
    $pages = get_posts([
        'post_type' => 'page',
        'numberposts' => -1,
    ]);
    $fields = [];

    foreach ($pages as $page) {
        $pageFields = get_fields($page->ID);
        if (!$pageFields) continue;
        $key = key($pageFields);
        // simplify return data structure
        $fields[$key] = $pageFields[$key];
    }

    return $fields;
}
