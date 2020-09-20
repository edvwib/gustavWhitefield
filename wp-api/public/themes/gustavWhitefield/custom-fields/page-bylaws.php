<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'bylaws',
    'fields' => [
        Group::make('Stadgar', 'bylaws')
            ->fields([
                Image::make('Bild', 'image')
                    ->instructions('Väljer ni ingen bild här kommer en placeholder att användas istället.')
                    ->library('all')
                    ->mimeTypes(['jpeg', 'jpg', 'png',])
                    ->previewSize('medium')
                    ->returnFormat('array'),
                Tab::make('Svenska', 'SV'),
                Wysiwyg::make('Innehåll', 'contentSV')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Wysiwyg::make('Innehåll', 'contentENG')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:stadgar'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
