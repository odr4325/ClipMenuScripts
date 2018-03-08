// ランダムパスワード生成
function makeRundomPass() {
var lines = 
	jconv = require 'jconv'

	text = '=?ISO-2022-JP?B?SGVsbG8sV29ybGQ='.replace('=?ISO-2022-JP?B?', '')
	//text = clipText
	buf = new Buffer(text, 'base64')

	convertedBuf = jconv.convert buf, 'ISO-2022-JP', 'UTF-8'
	return convertedBuf.toString()
 }

return 	makeRundomPass();
