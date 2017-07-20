<?php
/*
    方倍工作室 http://www.cnblogs.com/txw1958/
    CopyRight 2013 www.fangbei.org  All Rights Reserved
*/
header('Content-type:text');
define("TOKEN", "weixin001");
if (isset($_GET['echostr'])) {
    echo "echostr";
}else{
    echo "123";
}
?>
