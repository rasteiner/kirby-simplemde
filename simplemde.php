<?php

class SimplemdeField extends TextField {
  
  static public $assets = array(
    'js' => array(
      'simplemde.min.js',
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
    $input->data('modal_url', $this->model()->url('field/' . $this->name() . '/simplemde/'));
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
