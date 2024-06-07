package com.example.myapplication;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;

import java.io.IOException;
import java.util.ArrayList;

public class flashcards extends AppCompatActivity {

    private static final int PICK_IMAGE_REQUEST = 1;
    private static final int CAMERA_REQUEST = 2;
    private ImageView imageView;
    private Uri imageUri;
    private Bitmap capturedBitmap;
    private ArrayList<Uri> flashcardUris;

    private ActivityResultLauncher<String> cameraPermissions;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_flashcards);

        imageView = findViewById(R.id.iv_selected_image);
        Button switchToHomePage = findViewById(R.id.imageButton);
        Button btnImportImage = findViewById(R.id.btn_import_image);
        Button camera_button = findViewById(R.id.camera_button);
        Button btnGenerateFlashcards = findViewById(R.id.btn_generate_flashcards);

        // Retrieve existing URIs if available
        flashcardUris = getIntent().getParcelableArrayListExtra("flashcardUris");
        if (flashcardUris == null) {
            flashcardUris = new ArrayList<>();
        }
        Log.d("flashcards", "Existing URIs: " + flashcardUris.size());

        cameraPermissions = registerForActivityResult(new ActivityResultContracts.RequestPermission(), new ActivityResultCallback<Boolean>() {
            @Override
            public void onActivityResult(Boolean isGranted) {
                if (isGranted) {
                    launchCamera();
                } else {
                    Toast.makeText(flashcards.this, "Camera permission denied", Toast.LENGTH_SHORT).show();
                }
            }
        });

        switchToHomePage.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(flashcards.this, MainActivity.class);
                startActivity(intent);
            }
        });

        btnImportImage.setOnClickListener(v -> openImageChooser());

        camera_button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (ContextCompat.checkSelfPermission(flashcards.this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
                    cameraPermissions.launch(Manifest.permission.CAMERA);
                } else {
                    launchCamera();
                }
            }
        });

        btnGenerateFlashcards.setOnClickListener(v -> {
            if (capturedBitmap != null) {
                generateFlashcard(capturedBitmap);
            } else {
                Toast.makeText(flashcards.this, "Please capture or select an image first", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void openImageChooser() {
        Intent intent = new Intent(Intent.ACTION_PICK, MediaStore.Images.Media.EXTERNAL_CONTENT_URI);
        intent.setType("image/*");
        startActivityForResult(intent, PICK_IMAGE_REQUEST);
    }

    private void launchCamera() {
        Intent cameraIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        startActivityForResult(cameraIntent, CAMERA_REQUEST);
    }

    private void generateFlashcard(Bitmap bitmap) {
        Uri imageUri = ImageUtils.saveBitmapToFile(this, bitmap);
        flashcardUris.add(imageUri);
        Log.d("flashcards", "New URI added: " + imageUri.toString());
        Log.d("flashcards", "Total URIs: " + flashcardUris.size());
        Intent intent = new Intent(flashcards.this, FlashcardViewActivity.class);
        intent.putParcelableArrayListExtra("flashcardUris", flashcardUris);
        startActivity(intent);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        if (requestCode == CAMERA_REQUEST && resultCode == RESULT_OK) {
            capturedBitmap = (Bitmap) data.getExtras().get("data");
            imageView.setImageBitmap(capturedBitmap);
        } else if (requestCode == PICK_IMAGE_REQUEST && resultCode == RESULT_OK && data != null && data.getData() != null) {
            imageUri = data.getData();
            try {
                capturedBitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), imageUri);
                imageView.setImageBitmap(capturedBitmap);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.out.print("Not working");
        }
    }
}
