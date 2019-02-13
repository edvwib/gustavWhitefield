<?php

declare(strict_types=1);

add_action('rest_api_init', function () {
    register_rest_route('api/v1', '/newsLastUpdated', [
        'methods' => 'GET',
        'callback' => 'getNewsLastUpdated'
    ]);
    register_rest_route('api/v1', '/news/', [
        'methods' => 'GET',
        'callback' => 'getAllNews'
    ]);
    register_rest_route('api/v1', '/news/(?P<id>\d+)', [
        'methods' => 'GET',
        'callback' => 'getNewsById'
    ]);
});

function getNewsLastUpdated()
{
    global $wpdb;
    return strtotime($wpdb->get_results(
        "SELECT post_modified_gmt
        FROM wpl_posts
        WHERE post_type='news'
        ORDER BY post_modified_gmt
        DESC LIMIT 1"
    )[0]->post_modified_gmt);
}

function getNewsById($data)
{
    $news = get_posts(['post_type' => 'news', 'attachment_id' => $data['id']]);
    $newsWithFields = [];
    foreach ($news as $item) {
        array_push($newsWithFields, [
            'post' => $item,
            'fields' => get_fields($item->ID),
        ]);
    }
    return $newsWithFields;
}

function getAllNews()
{
    $posts = get_posts([
        'post_type' => 'news',
        'numberposts' => -1
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
