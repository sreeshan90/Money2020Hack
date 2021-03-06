package com.example.eharihs.myapplication;

import android.widget.TextView; 

public class MainView {
	public static final int STATUS_LOCK_PATTERN_SAVED = 0;
	public static final int STATUS_LOCK_PATTERN_NOT_SAVED = 1;
	public static final int STATUS_LOCK_PATTERN_VERFIED = 2;
	public static final int STATUS_LOCK_PATTERN_VERFIED_FAILED = 3;

	private SpeakActivity mActivity = null;

	protected TextView mTipTextView = null;

	public MainView(SpeakActivity activity) {
		mActivity = activity;
		//
		mActivity.setContentView(R.layout.activity_main);
		//
		mTipTextView = (TextView) mActivity.findViewById(R.id.tip_textview);
	}

	public void updateView(int status) {
		switch (status) {
		case STATUS_LOCK_PATTERN_SAVED:
			mTipTextView.setText("Pattern set");
			break;
		case STATUS_LOCK_PATTERN_NOT_SAVED:
			mTipTextView.setText("There is no set pattern");
			break;

		case STATUS_LOCK_PATTERN_VERFIED:
			mTipTextView.setText("Correct");
			break;

		case STATUS_LOCK_PATTERN_VERFIED_FAILED:
			mTipTextView.setText("No more tries");
			break;
		}
	}
}