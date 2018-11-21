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
        'coverImg' => __('Utvald bild'),

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
        case 'coverImg':
            echo '<img
                src=' . field('news_images', $post_id)[0]['image']['sizes']['medium'] . '
                style="max-width: 100%; max-height: 150px;"
            />';
            break;
    }
}
add_action('manage_news_posts_custom_column', 'news_custom_column', 10, 2);
