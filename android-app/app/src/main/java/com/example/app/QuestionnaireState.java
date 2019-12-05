package com.example.app;


import com.example.app.answer.Answer;
import com.example.app.answer.Answers;

import com.example.app.answer.Condition;
import com.example.app.question.Question;
import com.example.app.question.Questionnaire;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

// current state of questionnaire with answers
public class QuestionnaireState implements Serializable {
	@SerializedName ("questionnaire")
	private final Questionnaire questionnaire;
	@SerializedName ("currentIndex")
	private int currentIndex;
	@SerializedName ("answers") private final List<Answers> answers = new ArrayList<>();

	// constructor, creates a new QuestionnaireState that starts at the first question
	public QuestionnaireState (Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
		currentIndex = 0;
		
		goToNextPossibleQuestion();
	}

	// goes to next question, skip zero or more questions if necessary (conditions)
	private void goToNextPossibleQuestion () {
		if (!this.isFinished () && !this.isCurrentQuestionPossible () ) {
			this.currentIndex++;
			this.goToNextPossibleQuestion ();
		}
	}

	// next button clicked -> current question answered and go to next question

	public void currentQuestionAnswered(Answers answers) {
		this.answers.add(answers);
		currentIndex++;
		goToNextPossibleQuestion();

	}

	// return true if there is no question left
	public boolean isFinished () {
		return currentIndex >= questionnaire.getQuestionList().size();
	}

	// test conditions and see if you can display this question
	private boolean isCurrentQuestionPossible () {
		int cndcount=this.questionnaire.getQuestionList().get(currentIndex).conditions.size();
		int counter=0;
	for(Condition cnd:this.questionnaire.getQuestionList().get(currentIndex).conditions){
		for(Answers ans:this.answers){
		if(cnd.qid==ans.qid){
			for(Answer val:ans.chosenValues){
				if(cnd.cv==val.id){
				counter++;
				}
			}
	
		}
		}
		
	}
		//return this.answers.containsAll(this.questionnaire.getQuestionList().get(currentIndex).conditions);
		// TODO: test conditions
		// TODO: what to do if you are after the last question
		return cndcount==counter;
	}

	// getter
	public int getCurrentIndex () {
		return currentIndex;
	}

	public Questionnaire getQuestionnaire () {
		return questionnaire;
	}

	public Question getCurrentQuestion () {
		return questionnaire.getQuestionList().get(currentIndex);
	}
	
	public List<Answers> getAnswers() {
		return answers;
	}
	

	// TODO: method saveCurrentState
}
