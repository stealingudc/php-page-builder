<?php

namespace Config;

require_once __DIR__."/Toml.php";
use Toml;

class Config {
  public string $pages_dir;
  
  public function __construct()
  {
    $toml = Toml::parseFile(dirname(dirname(__DIR__))."/config.toml");
    $parsed = json_decode(json_encode($toml), true);

    $this->pages_dir = $parsed["paths"]["pages_dir"];
    if(!is_dir($_SERVER['DOCUMENT_ROOT'] . $this->pages_dir )){
      mkdir($_SERVER['DOCUMENT_ROOT'] . $this->pages_dir);
    }
  }
}
