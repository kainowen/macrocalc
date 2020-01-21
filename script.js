

var submit = $("#submit");

submit.click( function(){
	
	var weight = $("#weight").val();
	var imperialWeight = $("#imperialWeight").prop("checked");
	
	if (imperialWeight){
		
		weight = Math.round(weight/2.2);
			
	}
	
	
	
	var height = $("#height").val();
	var imperialHeight = $("#imperialHeight").prop("checked");
	
	if (imperialHeight){
		
		height = Math.round(height*2.54);
			
	}
	
	var activity = parseInt($("#activity").val(),10);
	var muscle = parseInt($("#muscle").val(),10);
	
	var male = $("#genderMale").prop("checked");
	var female = $("#genderFemale").prop("checked");
	
	var rapidFatLoss = $("#goalRapidLoss").prop("checked");
	var fatLoss = $("#goalLoss").prop("checked");
	var recomp = $("#goalRecomp").prop("checked");
	var gain = $("#goalGain").prop("checked");
	var forcedGain = $("#goalRapidGain").prop("checked");
	
	
	
	
	function genderLVL() {
		if (male) {
			return 0;	
		} else {
			return 1;
		}};
	var gender = parseInt(genderLVL(),10);
		
	
	
	function goalLVL() {
		if (rapidFatLoss) {
			return -2;	
		} else if (fatLoss) {
			return -1;
		} else if (recomp) {
			return 0;
		} else if (gain) {
			return 1;
		} else if (forcedGain) {
			return 2;
		}};
	
	var goal = parseInt(goalLVL(),10);
	
	var trainingFatText = $("#fatsText");
	var trainingProteinText = $("#proteinText");
	var trainingCarbsText = $("#carbsText");
	var trainingKcalsText = $("#caloriesText");
	var restFatText = $("#restFatsText");
	var restProteinText = $("#restProteinText");
	var restCarbsText = $("#restCarbsText");
	var restKcalsText = $("#restCaloriesText");
	
	var protein =Math.round(((height - 30) * (1-(0.15*gender))) + (muscle * 10));
		trainingProteinText.html("Protein: " + protein + "g");
		restProteinText.html("Protein: " + protein + "g");
	var fat =Math.round(weight * (0.55 + (0.15 * (activity - gender))));
		trainingFatText.html("Fat: " + fat + "g");
		restFatText.html("Fat: " + fat + "g");
	var trainingCarbs = Math.round((weight * 4) + (weight * goal)) ;
		trainingCarbsText.html("Carbs: " + trainingCarbs + "g");
	var restCarbs = Math.round((weight * 3) + (weight * goal)) ;
		restCarbsText.html("Carbs: " + restCarbs + "g");
	var trainingKcals = Math.round(((protein + trainingCarbs)*4)+(fat*9));
		trainingKcalsText.html("Calories: " + trainingKcals);
	var restKcals = Math.round(((protein + restCarbs)*4)+(fat*9));
		restKcalsText.html("Calories: " + restKcals);
		
	 

	
	
	
}); 
