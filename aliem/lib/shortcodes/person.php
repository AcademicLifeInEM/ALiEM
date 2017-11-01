<?php

namespace ALIEM\Shortcodes;

function person($atts = [], $content = null) {
    $atts = shortcode_atts([
        'name' => '',
        'title' => '',
        'image' => '',
        'twitter' => '',
    ], $atts);
    extract($atts);

    if ($name === '' || $image === '' || $title === '') {
        return "<h1 style='color: red'>Person shortcode requires 'name', 'image', and 'title' attributes!</h1>";
    }

    if ($twitter !== '') {
        $twitter = "
        <div class='person__twitter'>
            <a aria-label='fusion-twitter' href='https://twitter.com/$twitter' target='_blank' rel='noopener noreferrer'></a>
        </div>";
    }

    return "
    <div class='person'>
        <div class='person__img'>
            <img src='$image'/>
        </div>
        <div class='person__details'>
            <div class='person__meta'>
                <div class='person__name'>$name</div>
                <div class='person__title'>$title</div>
            </div>
            $twitter
        </div>
        <div class='person__background'>$content</div>
    </div>
    ";
}
add_shortcode('person', 'ALIEM\Shortcodes\person');