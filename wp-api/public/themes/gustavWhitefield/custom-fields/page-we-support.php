<?php

declare (strict_types = 1);

$fields = [
    acf_group([
        'name' => 'weSupport',
        'label' => 'Vi stödjer',
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
            acf_tab([
                'name' => 'SV2',
                'label' => 'Svenska',
            ]),
            acf_text([
                'name' => 'titleSV',
                'label' => 'Titel för animation',
                'instructions' => 'Förklara vad texterna i animationerna handlar om.',
                'required' => true,
            ]),
            acf_tab([
                'name' => 'ENG2',
                'label' => 'Engelska',
            ]),
            acf_text([
                'name' => 'titleENG',
                'label' => 'Titel för animation',
                'instructions' => 'Förklara vad texterna i animationerna handlar om.',
                'required' => true,
            ]),
            acf_tab([
                'name' => 'endpoint2',
                'label' => '',
                'endpoint' => true,
            ]),
            acf_repeater([
                'name' => 'item',
                'label' => 'Tidigare aktiviteter',
                'instructions' => 'Här kan ni lägga till exempel på tidigare aktiviteter som ni har bidragit till.',
                'layout' => 'block',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_textarea([
                        'name' => 'contentSV',
                        'label' => 'Kort text om aktiviteten.',
                        'required' => true,
                        'rows' => 3,
                    ]),
                    acf_tab([
                        'name' => 'ENG',
                        'label' => 'Engelska',
                    ]),
                    acf_textarea([
                        'name' => 'contentENG',
                        'label' => 'Kort text om aktiviteten.',
                        'required' => true,
                        'rows' => 3,
                    ]),
                ],
            ]),
        ],
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:vi-stodjer')
    ]
];

acf_field_group([
    'title' => 'weSupport',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
