<?php

declare(strict_types=1);

use WordPlate\Acf\Fields\Group;
use WordPlate\Acf\Fields\Image;
use WordPlate\Acf\Fields\Repeater;
use WordPlate\Acf\Fields\Tab;
use WordPlate\Acf\Fields\Text;
use WordPlate\Acf\Fields\Wysiwyg;
use WordPlate\Acf\Location;

register_extended_field_group([
    'title' => 'supportUs',
    'fields' => [
        Group::make('Stöd oss', 'supportUs')
        ->fields([
                Tab::make('Svenska', 'SV'),
                Wysiwyg::make('Introduktion', 'introSV')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG'),
                Wysiwyg::make('Introduktion', 'introENG')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('', 'endpoint')->endpoint(),
                Repeater::make('Betalmetoder', 'paymentMethods')
                    ->instructions('Här kan ni lägga till olika betalmetoder, exempelvis Swish.')
                    ->layout('block')
                    ->fields([
                        Image::make('Bild', 'image')
                            ->instructions('Lägg till en bild med något av formaten <strong>jpg</strong>, <strong>jpeg</strong> eller <strong>png</strong>. Lägger ni inte till någon bild kommer en generisk bild läggas till automatiskt.')
                            ->library('all')
                            ->mimeTypes(['jpeg', 'jpg', 'png',])
                            ->previewSize('thumbnail')
                            ->returnFormat('array'),
                        Tab::make('Svenska', 'SV'),
                        Text::make('Titel', 'titleSV')
                            ->required(),
                        Wysiwyg::make('Innehåll', 'contentSV')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('Engelska', 'ENG'),
                        Text::make('Titel', 'titleENG')
                            ->required(),
                        Wysiwyg::make('Innehåll', 'contentENG')
                            ->mediaUpload(false)
                            ->tabs('visual')
                            ->toolbar('simple')
                            ->required(),
                        Tab::make('', 'endpoint')->endpoint(),
                    ]),
                Tab::make('Svenska', 'SV2')->endpoint(),
                Wysiwyg::make('Övrigt', 'otherSV')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
                Tab::make('Engelska', 'ENG2'),
                Wysiwyg::make('Övrigt', 'otherENG')
                    ->mediaUpload(false)
                    ->tabs('visual')
                    ->toolbar('simple')
                    ->required(),
            ]),
    ],
    'style' => 'seamless',
    'location' => [
        Location::if('post_taxonomy', 'page-category:stod-oss'),
    ],
    'hide_on_screen' => [
        'the_content',
        'featured_image',
    ],
]);
