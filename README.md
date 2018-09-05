# JSON Field for Laravel Nova

This field allows to group other Nova Fields and merge their key => value pairs in a unique JSON.

### Demo

![Demo](http://g.recordit.co/b7alxIvlsh.gif)

### Install

Run this command into your nova project:
`composer require 64robots/nova-json`

### Add it to your Nova Resource:

Create a new Json field passing an array of Nova Fields as second param

```php
use R64\NovaJson\Json;


Json::make('Content', [
              Text::make('Name'),
              Boolean::make('Active'),
              Textarea::make('Description'),
          ]),
```

Attribute name can be passed as third param

```php
use R64\NovaJson\Json;


Json::make('Content', [
              Text::make('Name'),
              Boolean::make('Active'),
              Textarea::make('Description'),
          ], 'content_json'),
```

This converts to

```bash
{ "name": "Jane", "active": true, "description": "My Description" }
```

and is stored in `content` field.
