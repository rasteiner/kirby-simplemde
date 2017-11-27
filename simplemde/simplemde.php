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
    
  public function input() {

    $input = parent::input();
    $input->tag('textarea');
    $input->data('field', 'simplemde');
    
    $input->data('json', preg_split( '/(\/options|\/pages)/', purl($this->model) )[0] . "/plugins/simplemde" );
    
    $input->removeAttr('value');
    $input->html($this->value() ? htmlentities($this->value(), ENT_NOQUOTES, 'UTF-8') : false);
    
    if (isset($this->buttons)) {
      if ($this->buttons == false) {
        $input->data('buttons', "no");
      }
      else {
        $input->data('buttons', $this->buttons);
      }
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

if (c::get('simplemde.replaceTextarea', false)) {
  class TextareaField extends SimplemdeField {
    
  }
}