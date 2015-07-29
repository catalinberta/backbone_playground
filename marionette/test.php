	

<?php
// $arr = '[{ name: 'moe', description: 44},{ name: 'larry', description: 45},{ name: 'curly', description: 46}]';
header('Content-type: application/json');
$arr=array('description'=>'abcd','name'=>'efg'); 
print(json_encode($arr));	
?>