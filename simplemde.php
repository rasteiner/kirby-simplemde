<?php

class SimplemdeField extends TextField {
  
  static public $assets = array(
    'js' => array(
      'simplemde.min.js',
      'jquery.easy-autocomplete.min.js',
      'editor.js'
    ),
    'css' => array(
      'simplemde.min.css',
      'editor.css'
    )
  );
  
  public function pageList($pagesToList) {
    $pageList = array();
    foreach($pagesToList as $p) {
      $pageList[] = array(
        'uri'      => (string)$p->uri(),
        'title'    => (string)$p->title(),
        'search'   => (string)$p->title() . " (" . (string)$p->uri() . ")"
      );
    }
    return $pageList;
  }
  
  public function routes() {
    return array(
      array(
        'pattern' => 'index.json',
        'action'  => function() {
          return json_encode($this->pageList(site()->index()), JSON_UNESCAPED_SLASHES);
        },
        'method'  => 'get|post'
      )
    );
  }
    
  public function input() {

    $input = parent::input();
    $input->tag('textarea');
    $input->data('field', 'simplemde');
    $input->data('index', $this->model()->url('field/' . $this->name() . '/simplemde/index.json'));
    
    
    $input->removeAttr('value');
    $input->html($this->value() ? htmlentities($this->value(), ENT_NOQUOTES, 'UTF-8') : false);
    
    if (isset($this->buttons)) {
      $input->data('buttons', $this->buttons);
    }

    return $input;
    
  }

  public function element() {
    $element = parent::element();
    $element->addClass('field-with-simplemde');
    if (c::get('simplemde.kirbytagHighlighting', true)) {
      $element->addClass('kirbytag-highlighting');
    }
    return $element;
  }

}
