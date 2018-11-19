<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'weThank',
        'label' => 'Vi tackar',
        'sub_fields' => [
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'instructions' => 'Text som visas över företagens logotyper.',
                'required' => true,
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'instructions' => 'Text som visas över företagens logotyper.',
                'required' => true,
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'images',
                'label' => 'Logotyper',
                'instructions' => 'Företagens logotyper.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'thumbnail',
                        'return_format' => 'array',
                    ]),
                    acf_url([
                        'name' => 'url',
                        'label' => 'Företagets hemsida',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:vi-tackar')
    ]
];

acf_field_group([
    'title' => 'weThank',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
