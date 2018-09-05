# JSON Field for Laravel Nova

This field allows to group other Nova Fields and merge their key => value pairs in a unique JSON.

### Demo

![Demo](http://g.recordit.co/b7alxIvlsh.gif)

### Install

Run this command into your nova project:
`composer require 64robots/nova-json`

### Add it to your Nova Resource:

```php
use R64\NovaJson\Json;


Json::make('Content', [
              Text::make('Name'),
              Boolean::make('Active'),
              Textarea::make('Description'),
          ]),
```

This converts to

```bash
{ "name": "Jane", "active": true, "description": "My Description" }
```

and is stored in `content` field.
