package com.example.app;

import android.app.ActionBar;
import android.os.Bundle;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.View;
import android.widget.Toast;

import com.example.app.answer.Answer;
import com.google.gson.Gson;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.util.List;

public class SaveAnswersActivity extends AppCompatActivity {
	private List<Answer> aList;
	private int size;
	private List<String> answers;
	private String res;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_save_answers);
	}

	public boolean onCreateOptionsMenu(Menu menu) {
		ActionBar actionBar = getActionBar();
		if (actionBar != null) {
			actionBar.setHomeButtonEnabled(false);      // Disable the button
			actionBar.setDisplayHomeAsUpEnabled(false); // Remove the left caret
			actionBar.setDisplayShowHomeEnabled(false); // Remove the icon
		}
		return true;
	}

	public void onBackPressed() {
		Toast myToast = Toast.makeText(this, "Vergiss es!", Toast.LENGTH_SHORT);
		myToast.show();
	}

	//save to json without format
	public void saveButtonClick(View view) {
		Gson gson = new Gson();
		//Text of the Document
		String textToWrite = gson.toJson(res);

		//Checking the availability state of the External Storage.
		String state = Environment.getExternalStorageState();
		if (!Environment.MEDIA_MOUNTED.equals(state)) {

			//If it isn't mounted - we can't write into it.
			return;
		}

		//Create a new file that points to the root directory, with the given name:
		File file = new File(getExternalFilesDir(null), "questions.json");

		//This point and below is responsible for the write operation
		try {
			final boolean newFile = file.createNewFile();
			BufferedWriter writer = new BufferedWriter(new FileWriter(file));
			writer.write(textToWrite);

			writer.close();
			Toast myToast = Toast.makeText(this, "Gespeichert!", Toast.LENGTH_SHORT);
			myToast.show();
		} catch (Exception e) {
			e.printStackTrace();
			Toast myToast = Toast.makeText(this, "Nicht Gespeichert!", Toast.LENGTH_SHORT);
			myToast.show();
		}
	}
}

