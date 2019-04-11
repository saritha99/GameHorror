const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STAGE1: Symbol("stage1"),
    STAGE1A: Symbol("stage1a"),
    STAGE1B: Symbol("stage1b"),
    STAGE1C: Symbol("stage1c"),
    STAGE1D: Symbol("stage1d"),	 

    STAGE2: Symbol("stage2"),
    STAGE2A: Symbol("stage2a"),
    STAGE2B: Symbol("stage2b"),
    STAGE2C: Symbol("stage2c"),
    STAGE2D: Symbol("stage2d"),     

    STAGE3: Symbol("stage3"),
    STAGE3A: Symbol("stage3a"), 
    STAGE3B: Symbol("stage3b"),
    STAGE3C: Symbol("stage3c"),
    STAGE3D: Symbol("stage3d"),   

    STAGE4: Symbol("stage4"),
    STAGE4A: Symbol("stage4a"),
    STAGE4B: Symbol("stage4b"),	
    STAGE4C: Symbol("stage4c"),
    STAGE4D: Symbol("stage4d"), 
   
    ADDITIONANSWER: Symbol("additionanswer"),
    SUBSTRACTIONANSWER: Symbol("substractionanswer"),
    MULTIPLICATIONANSWER: Symbol("multiplicationanswer"),
    DIVISIONANSWER: Symbol("divisionanswer"),
    EXIT: Symbol("exit")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "Hi I'm Saritha. Here we are going to play a math quiz. Are you ready for the quiz?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.STAGE1;
                break;
            case GameState.STAGE1:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "What's the answer of 2+2? ";
                    this.stateCur = GameState.ADDITIONANSWER;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
            case GameState.ADDITIONANSWER:
                if(sInput.toLowerCase().match("4")){
                    sReply = "You are Correct!. Do you wanna go for the another question?";
                    this.stateCur=GameState.STAGE1A;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }    
                break;

	   case GameState.STAGE1A:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "What's the addition of 9+8?";
                    this.stateCur=GameState.STAGE1B;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }    
                break;
		
 	   case GameState.STAGE1B:
                if(sInput.toLowerCase().match("17")){
                    sReply = "You are Correct!. Do you wanna go for the another question?";
                    this.stateCur=GameState.STAGE1C;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }    
                break;

	   case GameState.STAGE1C:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "What's the addition of 12+12";
                    this.stateCur=GameState.STAGE1D;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }    
                break;
	
	   case GameState.STAGE1D:
                if(sInput.toLowerCase().match("24")){
                    sReply = "You are Correct!. Do you wanna go for another Stage?";
                    this.stateCur=GameState.STAGE2;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;    
		
           case GameState.STAGE2:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 256-2? ";
                    this.stateCur = GameState.SUBSTRACTIONANSWER;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
    
            case GameState.SUBSTRACTIONANSWER:
                if(sInput.toLowerCase().match("254")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE2A;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;

	    case GameState.STAGE2A:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 250-250? ";
                    this.stateCur = GameState.STAGE2B;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
	
            case GameState.STAGE2B:
                if(sInput.toLowerCase().match("0")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur = GameState.STAGE2C;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
            
            case GameState.STAGE2C:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 22-12?";
                    this.stateCur = GameState.STAGE2D;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
		   
  	   case GameState.STAGE2D:
                if(sInput.toLowerCase().match("10")){
                    sReply = "You are Correct!.. Do you wanna go for another stage?"
                    this.stateCur = GameState.STAGE3;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
           
           case GameState.STAGE3:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 12*12? ";
                    this.stateCur = GameState.MULTIPLICATIONANSWER;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break; 

            case GameState.MULTIPLICATIONANSWER:
                if(sInput.toLowerCase().match("144")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE3A;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
			
	    case GameState.STAGE3A:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 13*6? ";
                    this.stateCur = GameState.STAGE3B;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
	 
           case GameState.STAGE3B:
                if(sInput.toLowerCase().match("78")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE3C;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
				
	  case GameState.STAGE3C:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 11*11? ";
                    this.stateCur = GameState.STAGE3D;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;

          case GameState.STAGE3D:
                if(sInput.toLowerCase().match("121")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE4;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;    

            case GameState.STAGE4:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 120/10? ";
                    this.stateCur = GameState.DIVISIONANSWER;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
            case GameState.DIVISIONANSWER:
                if(sInput.toLowerCase().match("12")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE4A;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
	    case GameState.STAGE4A:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 10/5? ";
                    this.stateCur = GameState.STAGE4B;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
	   case GameState.STAGE4B:
                if(sInput.toLowerCase().match("2")){
                    sReply = "You are Correct!.. Do you wanna go for another question?"
                    this.stateCur=GameState.STAGE4C;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;
	   case GameState.STAGE4C:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "what's the answer of 50/10? ";
                    this.stateCur = GameState.STAGE4D;
                }else{
                    sReply = "Oh.. looks like you are not interested.. See you next time! Have a great day!";
                    this.stateCur=GameState.EXIT;
                }
                break;
	   case GameState.STAGE4D:
                if(sInput.toLowerCase().match("5")){
                    sReply = "You are Correct!.. You have won the game!.."
                    this.stateCur=GameState.EXIT;
                }else{
                    sReply = "Oops Sorry! you lost the game.. Better luck next time..";
                    this.stateCur=GameState.EXIT;
                }
                break;		 			
                         
            case GameState.EXIT:
                break;
            default 
                exit;
        }
        return(sReply);
    }
}