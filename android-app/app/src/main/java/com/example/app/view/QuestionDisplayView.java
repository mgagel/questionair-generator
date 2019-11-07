package com.example.app.view;

import android.view.View;

import com.example.app.QuestionDisplayActivity;
import com.example.app.answer.Answer;
import com.example.app.question.ChoiceQuestion;
import com.example.app.question.Note;
import com.example.app.question.Question;
import com.example.app.question.SliderQuestion;
import com.example.app.question.PercentSliderQuestion;

public abstract class QuestionDisplayView {

	// the corresponding activity
	private final QuestionDisplayActivity activity;

	// constructor
	protected QuestionDisplayView (QuestionDisplayActivity activity) {
		this.activity = activity;
	}

	// getter
	protected QuestionDisplayActivity getActivity () {
		return this.activity;
	}


	// create new view for the current question of the activity
	public static QuestionDisplayView create (QuestionDisplayActivity activity) {
		Question question = activity.getState ().getCurrentQuestion ();

		if (question instanceof ChoiceQuestion)
			return new MultipleChoiceView (activity, (ChoiceQuestion) question);
		else if (question instanceof SliderQuestion)
			return new SliderView (activity, (SliderQuestion) question);
		else if (question instanceof PercentSliderQuestion)
			return new PercentSliderView (activity, (PercentSliderQuestion) question);
		else if (question instanceof Note)
			return new NoteView (activity, (Note) question);
		else
			throw new IllegalArgumentException ();
		// TODO: implement other question views
	}

	public abstract View getView ();
	// get all answer
	public abstract Answer getCurrentAnswer ();

}
