<?php

declare(strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/news/', [
        'methods' => 'GET',
        'callback' => 'getAllNews'
    ]);
});

function getAllNews(){
    return get_posts([
        'post_type' => 'news',
    ]);
}

