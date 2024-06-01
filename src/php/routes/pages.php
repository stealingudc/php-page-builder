<?php

include_once dirname(__DIR__) . "/Config.php";
use Config\Config;

$method = $_SERVER["REQUEST_METHOD"];
$router = new PageRouter();

switch($method){
  case "POST": {
    echo $router->POST();
    exit();
  }
}

class PageRouter {
  private Config $config;

  public function __construct(){
    $this->config = new Config();
  }
  
  public function POST(){
    $dir = $_SERVER["DOCUMENT_ROOT"] . $this->config->pages_dir;

    $data = array(
      "meta_title" -> $_POST["meta-title"],
      "meta_description" -> $_POST["meta-description"],
      "html" -> $_POST["html"],
      "css" -> $_POST["css"]
    );

    if(!is_dir($dir) || !file_exists($dir)){
      mkdir($dir);
    }

    $file = fopen($dir . "/" . self::refine_string($_POST["meta-title"]) . ".html", "w");
    fwrite($file, "<!DOCTYPE html>\n\n");
    fwrite($file, "<head>\n");
    fwrite($file, "\t<title>".$_POST["meta-title"]."</title>\n");
    fwrite($file, "\t<meta name='description' content='".$_POST["meta-description"]."'>\n");
    fwrite($file, "\t<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n");
    fwrite($file, "\t<meta charset='UTF-8'>\n");
    fwrite($file, "\t<style>\n");
    fwrite($file, "\t\t".$_POST['css']."\n");
    fwrite($file, "\t</style>\n");
    fwrite($file, "</head>\n\n");
    fwrite($file, "<body>\n");
    fwrite($file, "\t".$_POST['html']."\n");
    fwrite($file, "</body>");

    fclose($file);
    
    exit();
  }

  private static function refine_string(string $str){
    return str_replace("_", "-", str_replace(" ", "-", strtolower($str)));
  }

  private function get_files(){
    $files = array();
    $file_names = array_values(array_diff(scandir($_SERVER["DOCUMENT_ROOT"] . $this->config->components_dir), array('.', '..'))) ;
    foreach ($file_names as $file_name){
      $files[] = $_SERVER["DOCUMENT_ROOT"] . $this->config->components_dir . "/$file_name";
    }
    return $files;
  }
}
