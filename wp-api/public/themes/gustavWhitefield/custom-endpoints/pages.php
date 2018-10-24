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
        array_push($fields, get_fields($page->ID));
    }

    return $fields;
}
