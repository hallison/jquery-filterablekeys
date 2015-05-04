/**
 * jQuery Plugin - Filterable Keys v1.0.0
 *
 * Copyright 2015, Hallison Batista <hallisonbatista@gmail.com>
 *
 * The MIT License (http://opensource.org/licenses/MIT)
 *
 * http://github.com/hallison/jquery-filterablekeys
 *
 * This is a simple resource to help a make a filtering based on links that
 * contains keywords to looking for inside a container.
 */

$(function() {
  var $filters = $('[data-toggle="filterablekeys"][data-keyword]');
  var $reset = $('[data-toggle="filterablekeys"][data-control="reset"]');
  var $status = $('[data-toggle="filterablekeys"][data-control="status"]');
  var originalMessage = $status.html();

  $filters.on('click', function() {
    var $filter = $(this);
    var $target = $($filter.data('target'));
    var keyword = $filter.data('keyword');

    var targetKeywords = $target.data('keywords') || [];
    var targetKeywords = $.isArray(targetKeywords) ? targetKeywords : targetKeywords.split(',');
    var elements = null;
    var keywordIndex = targetKeywords.indexOf(keyword);
    var isKeywordFound = keywordIndex > -1;

    if (isKeywordFound) {
      targetKeywords.splice(keywordIndex, 1);
    } else {
      targetKeywords.push(keyword);
    }

    elements = targetKeywords.length > 1 ? '.filterable.active' : '.filterable';

    if (targetKeywords.length) {
      $target.find(elements).hide().map(function() {
        var $element = $(this);
        var keywords = $element.data('keywords');
        var keywords = $.isArray(keywords) ? keywords : keywords.split(',');
        var filtered = null;
  
        for (i = 0; i <= targetKeywords.length - 1; i++) {
          var isElementFiltered = keywords.indexOf(targetKeywords[i]) > -1;
          var elementId = $element.attr('id');
  
          if (isElementFiltered) {
            filtered = this;
          } else {
            filtered = null;
          }
        }
        return filtered;
      }).addClass('active').show();
    } else {
      $target.find(elements).removeClass('active').show();
      $status.html(originalMessage);
    }

    $target.data('keywords', targetKeywords);
    $filter.toggleClass('active').parent().toggleClass('active');
    $status.html(targetKeywords.join(', '));
  });

  $reset.on('click', function() {
    var $reset = $(this);
    var $target = $($reset.data('target'));

    $target.data('keywords', null);
    $target.find('.filterable').removeClass('active').show();
    $filters.removeClass('active').parent().removeClass('active');
    $status.html(originalMessage);
  });
});

