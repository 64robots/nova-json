<?php

namespace R64\NovaJson;

use Laravel\Nova\Fields\Field;

class Json extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'nova-json';

    /**
     * Indicates if the element should be shown on the index view.
     *
     * @var bool
     */
    public $showOnIndex = false;

    /**
     * The child fields.
     *
     * @var array
     */
    public $fields = [];

    /**
     * Create a new JSON field.
     *
     * @param  string  $name
     * @param  string|null  $attribute
     * @param  mixed|null  $resolveCallback
     * @return void
     */
    public function __construct($name, $fields, $attribute = null, $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->withMeta(['fields' => $fields]);
    }
}
