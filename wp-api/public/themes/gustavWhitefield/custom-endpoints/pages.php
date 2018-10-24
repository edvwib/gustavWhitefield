<?php

declare (strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/pages/', [
        'methods' => 'GET',
        'callback' => 'getAllPages'
    ]);
    register_rest_route('api/v1', '/page/(?P<slug>.+)', [
        'methods' => 'GET',
        'callback' => 'getPage'
    ]);
});

function getAllPages(){
    $pages = get_posts([
        'post_type' => 'page',
        'numberposts' => -1,
    ]);
    $pagesWithFields = [];

    foreach ($pages as $page) {
        array_push($pagesWithFields, [
            'page' => $page,
            'fields' => get_fields($page->ID),
        ]);
    }

    return $pagesWithFields;
}

function getPage($data)
{
    $page = get_page_by_path($data['slug']);
    $fields = get_fields($page->ID);
    $page->fields = $fields;
    return $page;
}

