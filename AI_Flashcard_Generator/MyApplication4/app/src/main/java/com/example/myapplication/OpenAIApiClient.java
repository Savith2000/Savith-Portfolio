package com.example.myapplication;

import android.graphics.Bitmap;
import android.util.Base64;
import android.util.Log;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class OpenAIApiClient {

    private static final String API_URL = "https://api.openai.com/v1/chat/completions";  // Adjust this endpoint if necessary
    private static final String API_KEY = "sk-proj-HWa9I9Vavgsfwxz1PUo0T3BlbkFJn5WNglIi8dzW5DgO14zZ"; // Replace with your OpenAI API key

    public interface FlashcardCallback {
        void onSuccess(String flashcardText);
        void onFailure(String errorMessage);
    }

    public static void generateFlashcard(Bitmap image, FlashcardCallback callback) {
        new Thread(() -> {
            try {
                OkHttpClient client = new OkHttpClient.Builder()
                        .connectTimeout(30, TimeUnit.SECONDS)
                        .readTimeout(30, TimeUnit.SECONDS)
                        .writeTimeout(30, TimeUnit.SECONDS)
                        .build();

                // Convert the bitmap to a base64 string
                ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                image.compress(Bitmap.CompressFormat.JPEG, 100, byteArrayOutputStream);
                byte[] byteArray = byteArrayOutputStream.toByteArray();
                String base64Image = Base64.encodeToString(byteArray, Base64.NO_WRAP);

                // Create a JSON payload
                JSONObject imageUrlObject = new JSONObject();
                imageUrlObject.put("url", "data:image/jpeg;base64," + base64Image);

                JSONArray contentArray = new JSONArray();
                contentArray.put(new JSONObject().put("type", "text").put("text", "The images you will be given are usually going to be whiteborad/notes. I want you to understand the content and then give a brief descrpption of the overall concepts that are present. Make sure it isn't longer than three sentences. "));
                contentArray.put(new JSONObject().put("type", "image_url").put("image_url", imageUrlObject));

                JSONObject messageObject = new JSONObject();
                messageObject.put("role", "user");
                messageObject.put("content", contentArray);

                JSONArray messages = new JSONArray();
                messages.put(messageObject);

                JSONObject jsonObject = new JSONObject();
                jsonObject.put("model", "gpt-4o-2024-05-13");
                jsonObject.put("messages", messages);
                jsonObject.put("max_tokens", 300);

                // Create request JSON body
                RequestBody body = RequestBody.create(
                        MediaType.parse("application/json; charset=utf-8"),
                        jsonObject.toString()
                );

                // Create request
                Request request = new Request.Builder()
                        .url(API_URL)
                        .post(body)
                        .addHeader("Authorization", "Bearer " + API_KEY)
                        .build();

                Response response = client.newCall(request).execute();

                if (response.isSuccessful()) {
                    String responseData = response.body().string();
                    Log.d("OpenAIApiClient", "Response data: " + responseData);
                    JSONObject responseJson = new JSONObject(responseData);

                    // Debug logging to see the structure of the response
                    Log.d("OpenAIApiClient", "Parsed JSON: " + responseJson.toString(2));

                    JSONArray choices = responseJson.getJSONArray("choices");
                    JSONObject choice = choices.getJSONObject(0);

                    String flashcardText = choice.getJSONObject("message").getString("content").trim();

                    callback.onSuccess(flashcardText);
                } else {
                    String errorResponse = response.body() != null ? response.body().string() : "Unknown error";
                    Log.e("OpenAIApiClient", "Error response: " + errorResponse);
                    callback.onFailure("Failed to generate flashcard: " + response.message());
                }

            } catch (IOException | JSONException e) {
                Log.e("OpenAIApiClient", "Exception: " + e.getMessage(), e);
                callback.onFailure("Error: " + e.getMessage());
            }
        }).start();
    }
}
