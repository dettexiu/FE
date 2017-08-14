//フレームワークを有効にする
enchant();
window.onload=function(){

	//ゲームにシーンを追加
	var game=new Core(960,640);
	var sceneGameMain=new Scene();
	
	//画像読み込み
	game.preload("file:///Users/shu/gitHub/FE/image/Flying dragons/ドラゴンダーク.png");


	game.onload=function(){
		var sprite=new Sprite(40,32);
		sprite.x=200;
		sprite.y=100;

		sprite.image=game.assets["file:///Users/shu/gitHub/FE/image/Flying dragons/ドラゴンダーク.png"];
		sprite.frame=2;
		sceneGameMain.addChild(sprite);
		game.pushScene(sceneGameMain);
	}

	
	game.start();	
}