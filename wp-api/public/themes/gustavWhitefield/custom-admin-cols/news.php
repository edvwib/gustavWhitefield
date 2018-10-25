<?php

declare (strict_types=1);

/*
 * Add columns to news list, and remove some defaults
 */
function add_news_columns($columns)
{
    unset($columns['title']);
    // unset($columns['date']);

    return array_merge($columns, [
        'titleSV' => __('Titel (svenska)'),
        'titleENG' => __('Titel (engelska)'),
    ]);
}
add_filter('manage_news_posts_columns', 'add_news_columns');


/*
 * Add columns to news post list
 */
function news_custom_column($column, $post_id)
{
    switch ($column) {
        case 'titleSV':
            echo '<b>' . field('news_titleSV', $post_id) . '</b>';
            break;
        case 'titleENG':
            echo field('news_titleENG', $post_id);
            break;
    }
}
add_action('manage_news_posts_custom_column', 'news_custom_column', 10, 2);
