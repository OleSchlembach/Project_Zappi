import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class JsonFileHandler {

  // This Method writes new Data into the JSON-Database
  public void writeToTextdatabase(String filePath, int[] data) {
    JSONArray jsonArray = new JSONArray();
    for (int value : data) {
      jsonArray.put(value);
    }

    JSONObject jsonObject = new JSONObject();
    jsonObject.put("values", jsonArray);

    try (FileWriter file = new FileWriter(filePath)) {
      file.write(jsonObject.toString());
      System.out.println("JSON-File successfully Updated.");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  // This Method reads all Data from the JSON-Databse
  public String readFromJsonFile(String filePath) {
    StringBuilder jsonData = new StringBuilder();

    try (BufferedReader reader = new BufferedReader(new FileReader(filePath))) {
      String line;
      while ((line = reader.readLine()) != null) {
        jsonData.append(line);
      }
    } catch (IOException e) {
      e.printStackTrace();
    }

    // JSON-Objekt aus dem gelesenen String erstellen
    JSONObject jsonObject = new JSONObject(jsonData.toString());
    JSONArray jsonArray = jsonObject.getJSONArray("values");

    // Transfer the Data into the proper Format for updating Highcharts
    StringBuilder result = new StringBuilder("[");
    for (int i = 0; i < jsonArray.length(); i++) {
      result.append(jsonArray.getInt(i));
      if (i < jsonArray.length() - 1) {
        result.append(",");
      }
    }
    result.append("]");

    return result.toString();
  }

  public static void main(String[] args) {
    JsonFileHandler handler = new JsonFileHandler();

    // Example-Data for one Day
    int[] data = {0.10, 0.20, 0.15, 0.10, 0.05, 0.10, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45, 0.50, 0.55, 0.60, 0.65, 0.70, 0.75, 0.80, 0.85, 0.90, 0.95, 1.00, 1.05};
    handler.writeToTextdatabase("data.json", data);

    // Test-Data-output
    String result = handler.readFromJsonFile("data.json");
    System.out.println("Ausgelesene Werte: " + result);
  }
}
