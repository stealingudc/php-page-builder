<?php

namespace PageBuilder;

include_once dirname(__DIR__) . "/Config.php";

use Config\Config;

$router = new ConfigRouter();
$method = $_SERVER["REQUEST_METHOD"];

if ($method === "GET") {
  echo $router->GET();
} 

class ConfigRouter 
{
  private Config $config;

  public function __construct()
  {
    $this->config = new Config();
  }

  public function GET()
  {
    return json_encode($this->config);
  }
}
