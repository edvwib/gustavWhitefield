<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\File;
use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'apply',
    'fields' => [
        Group::make('Sök bidrag', 'apply')
            ->fields([
                Tab::make('Svenska', 'SV'),
                Wysiwyg::make('Innehåll', 'contentSV')
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Wysiwyg::make('Innehåll', 'contentENG')
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('', 'endpoint')->endpoint(),
                File::make('Samtycke', 'concent')
                    ->instructions('Lägg till fil som <strong>pdf</strong>.')
                    ->library('all')
                    ->mimeTypes(['pdf'])
                    ->returnFormat('array')
                    ->required(),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:sok-bidrag'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
