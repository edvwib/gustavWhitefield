<?php

declare (strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/page/(?P<slug>.+)', [
        'methods' => 'GET',
        'callback' => 'getPage'
    ]);
});

function getPage($data)
{
    return get_page_by_path($data['slug']);
}

