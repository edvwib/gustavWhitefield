<?php

declare (strict_types = 1);


$fields = [
    acf_group([
        'name' => 'economy',
        'label' => 'Ekonomi',
        'sub_fields' => [
            acf_image([
                'name' => 'image',
                'label' => 'Bild',
                'instructions' => 'Väljer ni ingen bild här kommer en placeholder att användas istället.',
                'library' => 'all',
                'mime_types' => 'jpeg, jpg, png',
                'preview_size' => 'medium',
                'return_format' => 'array',
            ]),
            acf_tab([
                'name' => 'SV',
                'label' => 'Svenska',
            ]),
            acf_wysiwyg([
                'name' => 'contentSV',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'ENG',
                'label' => 'Engelska',
            ]),
            acf_wysiwyg([
                'name' => 'contentENG',
                'label' => 'Innehåll',
                'required' => true,
                'media_upload' => false,
                'tabs' => 'visual',
                'toolbar' => 'simple',
            ]),
            acf_tab([
                'name' => 'endpoint',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'files',
                'label' => 'Årsredovisningar',
                'instructions' => 'Här kan ni ladda upp årsredovisningar.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_file([
                        'name' => 'report',
                        'label' => 'Årsredovisning',
                        'instructions' => 'Lägg till fil som <strong>pdf</strong>.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'pdf',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:ekonomi')
    ]
];

acf_field_group([
    'title' => 'economy',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
