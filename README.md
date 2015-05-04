# jQuery Plugin: Filterable Keys

This is a simple resource to help a make a filtering based on links that
contains keywords to looking for inside a container.

The original source has been written in the site
[Chozodia](http://chozodia.com.br).

## How to use

Just use HTML data attributes to toggle filterable keys.

### Common for all elements

- `data-toggle` (mandatory) enables plugin use element as configuration. This
  configuration is mandatory to all elements that handle filters.
- `data-target` sets the element ID that contains the elements that will be
  filtered.

### Keyword

- `data-keyword` sets the keyword that be used to filter.

  Example:

    <a href="#" data-toggle="filterablekeys" data-target="#list" data-keyword="Keyword">Keyword</a>

### Control

- `data-control` enable control: `reset` or `status`.

  Example:

    <a href="#" data-toggle="filterablekeys" data-target="#list" data-control="reset">Reset Filter</a>
    <p>Filters: <span data-toggle="filterablekeys" data-control="status">None</span></p>

## Install

Just copy the plugin to JavaScript directory.

    <script type="application/javascript" src="/js/jquery.min.js"></script>
    <script type="application/javascript" src="/js/jquery.filterablekeys.min.js"></script>

