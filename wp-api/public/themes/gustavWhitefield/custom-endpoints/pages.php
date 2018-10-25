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
        if (!$pageFields && !get_children($page->ID)) continue;
        if (!$pageFields) continue;
        // simplify return data structure
        $fields[key($pageFields)] = get_fields($page->ID)[key($pageFields)];
        $fields[key($pageFields)]['page'] = $page;
    }

    return $fields;
}
