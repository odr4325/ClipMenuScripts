// ランダムパスワード生成
(function() {
		// 生成する文字列の長さ
		var l = 32;

		// 生成する文字列に含める文字セット
		var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*-+.,!#$%&()~|_";
		//without I,l,1,O,o,0
		var c = "abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789-+=.&%_";

		var cl = c.length;
		var r = "";
		for(var i=0; i<l; i++){
		  r += c[Math.floor(Math.random()*cl)];
		}
		print(r);
 }());
