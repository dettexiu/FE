


var topologyFactory=function(){
    var TOPOLOGY_NO={
	FLATLAND:1,
	ROCK:2,
	LAKE:3,
	FOREST:4,
    }

    
    var getFlatLand=function(){
	var name="平地";
	var defence_bonus=0;
	var evade_bonus=0;
	var recovery_rate=0;
	var mCostList=[1,1,1,1,1,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }

    var getRock=function(){
        var name="岩";
	var defence_bonus=0;
	var evade_bonus=0;
	var recovery_rate=0;
	var mCostList=[99,99,99,99,99,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }

    
    
     var getLake=function(){
        var name="湖";
	var defence_bonus=0;
	var evade_bonus=0;
	var recovery_rate=0;
	var mCostList=[99,5,99,99,99,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }

    
     var getForest=function(){
        var name="林";
	var defence_bonus=1;
	var evade_bonus=10;
	var recovery_rate=0;
	var mCostList=[2,2,2,2,2,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
     }

    var getMountain=function(){
	var name="山";
	var defence_bonus=2;
	var evade_bonus=20;
	var recovery_rate=0;
	var mCostList=[2,2,2,9,9,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }

    var getSky=function(){
    	var name="空";
	var defence_bonus=0;
	var evade_bonus=0;
	var recovery_rate=0;
	var mCostList=[9,9,9,9,9,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }

    
    var getWasteLand=function(){
    	var name="荒地";
	var defence_bonus=0;
	var evade_bonus=-10;
	var recovery_rate=0;
	var mCostList=[2,2,2,2,9,1];
	var topology=new Topology(name,defence_bonus,evade_bonus,recovery_rate);
    }
}
