
//基礎ステータス用クラス

var UnitParam=function(HP,power,defence,magic,resist,speed,tec,lack,move){
    this.HP=HP;
    this.power=power;
    this.defence=defence;
    this.magic=magic;
    this.resist=resist;
    this.speed=speed;
    this.tec=tec;
    this.lack=lack;
    this.move=move;

    this.getHP=function(){
	return this.HP;
    };

    this.getPower=function(){
	return this.power;
    };

    this.getDefence=function(){
	return this.defence;
    };

    this.getMagic=function(){
	return this.magic;
    };

    this.getResist=function(){
	return this.resist;
    };

    this.getSpeed=function(){
	return this.speed;
    };

    this.getLack=function(){
	return this.lack;
    };

    this.getMove=function(){
	return this.move;
    };
}
