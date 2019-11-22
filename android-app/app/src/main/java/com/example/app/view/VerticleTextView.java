package com.example.app.view;

import android.content.Context;
import android.graphics.Canvas;
import android.support.v7.widget.AppCompatTextView;
import android.text.TextPaint;
import android.util.AttributeSet;
import android.view.Gravity;

// class wich allows to proper display vertical TextViews
class VerticalTextView extends AppCompatTextView {
	private final boolean topDown;
	
	public VerticalTextView(Context context, AttributeSet attrs) {
		super(context, attrs);
		final int gravity = getGravity();
		if (Gravity.isVertical(gravity) && (gravity & Gravity.VERTICAL_GRAVITY_MASK) == Gravity.BOTTOM) {
			setGravity((gravity & Gravity.HORIZONTAL_GRAVITY_MASK) | Gravity.TOP);
			topDown = false;
		}
		else
			topDown = true;
	}
	
	@Override
	protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
		//noinspection SuspiciousNameCombination
		super.onMeasure(heightMeasureSpec, widthMeasureSpec);
		setMeasuredDimension(getMeasuredHeight(), getMeasuredWidth());
	}
	
	@Override
	protected void onDraw(Canvas canvas) {
		TextPaint textPaint = getPaint();
		textPaint.setColor(getCurrentTextColor());
		textPaint.drawableState = getDrawableState();
		
		canvas.save();
		
		if (topDown) {
			canvas.translate(getWidth(), 0);
			canvas.rotate(90);
		}
		else {
			canvas.translate(0, getHeight());
			canvas.rotate(-90);
		}
		
		
		canvas.translate(getCompoundPaddingLeft(), getExtendedPaddingTop());
		
		getLayout().draw(canvas);
		canvas.restore();
	}
}
