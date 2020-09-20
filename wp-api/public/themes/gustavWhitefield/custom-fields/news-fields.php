<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Textarea;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'news',
    'fields' => [
        Group::make('Nyhet', 'news')
            ->fields([
                Tab::make('Svenska', 'SV'),
                Text::make('Titel', 'titleSV')
                    ->required(),
                Textarea::make('Inledning', 'introSV')
                    ->instructions('Eventuella radbrytningar kommer att tas bort.')
                    ->rows(3)
                    ->required(),
                Wysiwyg::make('Innehåll', 'contentSV')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Text::make('Titel', 'titleENG')
                    ->required(),
                Textarea::make('Inledning', 'introENG')
                    ->instructions('Eventuella radbrytningar kommer att tas bort.')
                    ->rows(3),
                Wysiwyg::make('Innehåll', 'contentENG')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('', 'endpoint')
                    ->endpoint(),
                Repeater::make('Bilder', 'images')
                    ->instructions('Den första bilden i listan kommer att fungera som utvald bild. (Visas i listan med alla nyheter och på startsidan.)')
                    ->required()
                    ->layout('block')
                    ->fields([
                        Image::make('Bild', 'image')
                            ->instructions('Lägg till en bild i något av formaten <strong>jpg</strong>, <strong>jpeg</strong>, <strong>png</strong> eller <strong>gif</strong>.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png', 'gif'])
                            ->previewSize('medium')
                            ->returnFormat('array'),
                 ]),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_type', 'page'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
