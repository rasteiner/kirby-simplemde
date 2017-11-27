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
  
  public function search() {
    return site()->search(get("phrase"), array(
    'minlength' => 1,
    'fields' => array(
      "title",
      "uri"
    )))->toArray();
  }
  
  public function routes() {
    return array(
      array(
        'pattern' => 'index.json',
        'action'  => function() {
          return json_encode($this->search(), JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        },
        'method'  => 'get|post'
      ),
      array(
        'pattern' => 'translation.json',
        'action'  => function() {
          if (version_compare(panel()->version(), '2.2', '>=')) {
              $lang = panel()->translation()->code();
          } else {
              $lang = panel()->language();
          }
          $langDir = __DIR__ . DS . 'languages' . DS;
          if (file_exists($langDir . $lang . '.php')) {
            $translation = include $langDir . $lang . '.php';
          }
          else { 
            $translation = include $langDir . 'en.php';
          }
          
          return json_encode($translation, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        },
        'method'  => 'get|post'
      )
    );
  }
  
    
  public function input() {

    $input = parent::input();
    $input->tag('textarea');
    $input->data('field', 'simplemde');
    
    $input->data('json', purl($this->model, 'field/' . $this->name . '/simplemde/'));
    
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