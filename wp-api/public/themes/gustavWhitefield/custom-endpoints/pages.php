<?php

declare (strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/pages/', [
        'methods' => 'GET',
        'callback' => 'getAllPages'
    ]);
});

function getAllPages(){
    $pages = get_posts([
        'post_type' => 'page',
        'numberposts' => -1,
    ]);
    $fields = [];

    foreach ($pages as $page) {
        $pageFields = get_fields($page->ID);
        if (!$pageFields) continue; //if post has no content
        $fields[key($pageFields)] = get_fields($page->ID)[key($pageFields)];
    }

    return $fields;
}
