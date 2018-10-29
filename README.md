# Important

# This field has been merged to [Custom Nova Fields](https://github.com/64robots/nova-fields) package. Keep track of it for updates!



# JSON Field for Laravel Nova

This field allows you to group together Nova Fields and merge their key => value pairs into unique JSON.

### Demo

![Demo](http://g.recordit.co/b7alxIvlsh.gif)

### Install

Run this command in your nova project:
`composer require 64robots/nova-fields`

### Add it to your Nova Resource:

Create a new Json field passing an array of Nova Fields as second param

```php
use R64\NovaFields\JSON;


JSON::make('Content', [
              Text::make('Name'),
              Boolean::make('Active'),
              Textarea::make('Description'),
          ]),
```

Attribute name can be passed as third param

```php
use R64\NovaFields\JSON;


JSON::make('Content', [
              Text::make('Name'),
              Boolean::make('Active'),
              Textarea::make('Description'),
          ], 'content_json'),
```

This converts to

```bash
{ "name": "Jane", "active": true, "description": "My Description" }
```

and is stored in the `content_json` field.

In this example ensure that the `content_json` field is being set to cast to `object` on the underlying model instance.
