<?php

declare (strict_types = 1);

$fields = [
    acf_group([
        'name' => 'aboutGustav',
        'label' => 'Om Gustav',
        'instructions' => 'Sidan är uppbyggd i tre delar, för att tillåta att bilder läggs till bredvid texten. Bilderna alternerar mellan vilken sida som dem visas på.',
        'sub_fields' => [
            acf_group([
                'name' => 'part1',
                'label' => 'Första stycket',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_wysiwyg([
                        'name' => 'contentSV',
                        'label' => 'Text',
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
                        'label' => 'Text',
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
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Den här bilden visas uppe till höger om stycket.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
            acf_group([
                'name' => 'part2',
                'label' => 'Andra stycket',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_wysiwyg([
                        'name' => 'contentSV',
                        'label' => 'Text',
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
                        'label' => 'Text',
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
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Den här bilden visas uppe till vänster om stycket.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
            acf_group([
                'name' => 'part3',
                'label' => 'Tredje stycket',
                'sub_fields' => [
                    acf_tab([
                        'name' => 'SV',
                        'label' => 'Svenska',
                    ]),
                    acf_wysiwyg([
                        'name' => 'contentSV',
                        'label' => 'Text',
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
                        'label' => 'Text',
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
                    acf_image([
                        'name' => 'image',
                        'label' => 'Bild',
                        'instructions' => 'Den här bilden visas uppe till höger om stycket.',
                        'required' => true,
                        'library' => 'all',
                        'mime_types' => 'jpeg, jpg, png',
                        'preview_size' => 'medium',
                        'return_format' => 'array',
                    ]),
                ],
            ]),
        ]
    ]),
];

$location = [
    [
        acf_location('post_taxonomy', 'page-category:om-gustav')
    ]
];

acf_field_group([
    'title' => 'aboutGustav',
    'fields' => $fields,
    'style' => 'seamless',
    'location' => $location,
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
