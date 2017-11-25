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
  
  public function pageSnippet($pageTitle, $pageNum, $pageUri, $pageChildren) {
    $pageSnippet = 
      '<div class="page">
        <div class="pagename">
          <span class="name">' . $pageTitle . '</span>
          <span class="number smallbox">' . $pageNum . '</span>
          <span class="link smallbox active smalllink" data-link="' . $pageUri .'">' . icon('link') . '</span>
          <span class="slidedown smallbox smalllink">' . icon('angle-down') . '</span>
        </div>';
    if ($pageChildren != "") {
      $pageSnippet .=
        '<div class="children">' . $this->listPages($pageChildren) . '</div>';
    }
    $pageSnippet .=
      '</div>';
    return $pageSnippet;
  }
  
  
  public function listPages($pagesToList) {
    $pageList = '<div class="pages" data-depth="' . $pagesToList->first()->depth() . '">';
    foreach ($pagesToList as $pageToList) {
      if ($pageToList->isVisible()) $num = $pageToList->num();
      else $num = "–";
      $pageList .= $this->pageSnippet(
        $pageToList->title(),
        $num,
        $pageToList->uri(),
        $pageToList->children()
      );
    }
    $pageList .= '</div>';
    return $pageList;
  }
  
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
    $element->append($this->listPages(site()->pages()));
    return $element;
  }

}
