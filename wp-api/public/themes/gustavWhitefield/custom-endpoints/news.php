<?php

declare(strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/news/', [
        'methods' => 'GET',
        'callback' => 'getAllNews'
    ]);
});

function getAllNews(){
    $posts = get_posts([
        'post_type' => 'news',
    ]);
    $postsWithFields = [];

    foreach ($posts as $post) {
        array_push($postsWithFields, [
            'post' => $post,
            'fields' => get_fields($post->ID),
        ]);
    }

    return $postsWithFields;
}

