package com.example.myapplication;

import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;

public class FlashcardViewActivity extends AppCompatActivity {

    private RecyclerView rvFlashcards;
    private TextView tvFlashcardText;
    private Button btnAddAnother;
    private FlashcardAdapter flashcardAdapter;
    private ArrayList<Uri> flashcardUris;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flashcard_view);

        rvFlashcards = findViewById(R.id.rv_flashcards);
        tvFlashcardText = findViewById(R.id.tv_flashcard_text);
        btnAddAnother = findViewById(R.id.btn_add_another);

        flashcardUris = getIntent().getParcelableArrayListExtra("flashcardUris");
        if (flashcardUris == null) {
            flashcardUris = new ArrayList<>();
        }
        Log.d("FlashcardView", "Total URIs received: " + flashcardUris.size());

        flashcardAdapter = new FlashcardAdapter(flashcardUris, this);
        rvFlashcards.setLayoutManager(new LinearLayoutManager(this));
        rvFlashcards.setAdapter(flashcardAdapter);

        Uri imageUri = flashcardUris.get(flashcardUris.size() - 1); // Get the last added image URI
        Bitmap bitmap = ImageUtils.getBitmapFromUri(this, imageUri);
        generateFlashcardText(bitmap);

        btnAddAnother.setOnClickListener(v -> {
            Intent intent = new Intent(FlashcardViewActivity.this, flashcards.class);
            intent.putParcelableArrayListExtra("flashcardUris", flashcardUris);
            startActivity(intent);
        });
    }

    private void generateFlashcardText(Bitmap bitmap) {
        OpenAIApiClient.generateFlashcard(bitmap, new OpenAIApiClient.FlashcardCallback() {
            @Override
            public void onSuccess(String flashcardText) {
                runOnUiThread(() -> {
                    tvFlashcardText.setText(flashcardText);
                    tvFlashcardText.setVisibility(View.VISIBLE);
                });
            }

            @Override
            public void onFailure(String errorMessage) {
                runOnUiThread(() -> {
                    tvFlashcardText.setText("Failed to generate flashcard.");
                    tvFlashcardText.setVisibility(View.VISIBLE);
                    Log.e("FlashcardView", errorMessage);
                });
            }
        });
    }
}
