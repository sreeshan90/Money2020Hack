package com.example.eharihs.myapplication;

import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.util.Log;
import android.widget.Toast;

public class SmsReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        Log.i("cs.fsu", "smsReceiver: SMS Received");

        Bundle bundle = intent.getExtras();
        if (bundle != null) {
            Log.i("cs.fsu", "smsReceiver : Reading Bundle");

            Object[] pdus = (Object[])bundle.get("pdus");
            SmsMessage sms = SmsMessage.createFromPdu((byte[])pdus[0]);
            Log.d("asd",sms.getMessageBody());
            Intent i = new Intent();
            i.setClassName("com.example.eharihs.myapplication", "com.example.eharihs.myapplication.SpeakActivity");
            i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            i.setType(sms.getDisplayMessageBody());
            context.startActivity(i);
        }
    }
}