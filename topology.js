var MOVE_TYPE={
    NORMAL:1,
    SAILOR:2,
    MAZE:3,
    ARMOR:4,
    CAVALRY:5,
    FLYING:6,
}

var CLASS_TYPE={
    NORMAL:1,
    MAZE:2,
    ARMOR:3,
    CAVALRY:4,
    FLYING:5,
}



var topology=function(name,mCostList,d_bonus,e_bonus,r_rate){   
    this.name=name;
    this.moveCostList=mCostList;
    this.defence_bonus=d_bonus;
    this.evade_bonus=e_bonus;
    this.recovery_rate=r_rate;

    this.GetName=function(){
	return name;
    }

    this.GetDefBonus=function(){
	return defence_bonus;
    }

    this.GetEvadeRate=function(){
	return evade_bonus;
    }

    this.GetRecover_rate=function(){
	return r_rate;
    }

    //ユニットの移動タイプを引数として渡すと移動コストを返す関数
    this.getMoveCost=function(move_type){
	return moveCostList[move_type];
    }
}

