package com.example.app.question;

import android.support.annotation.Nullable;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.io.Serializable;
import java.util.List;

public class Questionnaire implements Serializable {
	// name of Questionnaire
	@Nullable
	@SerializedName ("questionnaireName")
	private final String name;
	// if of Questionnaire
	@SerializedName ("questionnaireID")
	private final double id;
	// list of all questions
	@Nullable
	@SerializedName ("questions")
	private final List<Question> questionList;
	// list of all reminders
	@Nullable
	@SerializedName ("reminderTimes")
	private final List<Reminder> reminderList;
	// path to the Questionnaire file
	@Expose (serialize = false, deserialize = false)
	private String path;
	
	// constructor only for java compiler reasons
	private Questionnaire() {
		name = null;
		questionList = null;
		id = 0.0;
		reminderList = null;
	}
	
	// getter
	@Nullable
	public String getName() {
		return this.name;
	}
	
	public double getID() {
		return this.id;
	}

	@Nullable
	public List<Question> getQuestionList() {
		return this.questionList;
	}

	@Nullable
	public List<Reminder> getReminderList() {
		return this.reminderList;
	}
	
	public String getPath() {
		return this.path;
	}
	
	// setter (only needed for path)
	public void setPath(String path) {
		this.path = path;
	}
}
