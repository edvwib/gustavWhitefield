<?php

declare (strict_types=1);

$fields = [
    acf_group([
        'name' => 'contentSE',
        'label' => 'Innehåll (svenska)',
        'sub_fields' => [
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
    acf_group([
        'name' => 'contentENG',
        'label' => 'Innehåll (engelska)',
        'sub_fields' => [
            acf_wysiwyg([
                'name' => 'content',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
        ],
    ]),
    acf_group([
        'name' => 'gallery',
        'label' => 'Galleri',
        'sub_fields' => [
            acf_repeater([
                'name' => 'images',
                'label' => 'Bilder',
                'instructions' => 'Den första bilden i listan kommer att fungera som utvald bild.',
                'required' => false,
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild i något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.',
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_type', 'news')
    ]
];

acf_field_group([
    'title' => 'news',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        0 => 'the_content',
        1 => 'featured_image',
    ],
]);
