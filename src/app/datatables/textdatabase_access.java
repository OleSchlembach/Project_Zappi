import org.json.JSONArray;
import org.json.JSONObject;

import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class JsonFileHandler {

  // Methode zum Schreiben von Daten in eine JSON-Datei
  public void writeToJsonFile(String filePath, int[] data) {
    JSONArray jsonArray = new JSONArray();
    for (int value : data) {
      jsonArray.put(value);
    }

    JSONObject jsonObject = new JSONObject();
    jsonObject.put("values", jsonArray);

    try (FileWriter file = new FileWriter(filePath)) {
      file.write(jsonObject.toString());
      System.out.println("JSON-Datei wurde erfolgreich geschrieben.");
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  // Methode zum Lesen von Daten aus einer JSON-Datei und Rückgabe im gewünschten Format
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

    // Ausgelesene Werte im Format "[wert,wert,wert,...]" abspeichern
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

    // Beispiel: Daten in eine JSON-Datei schreiben
    int[] data = {10, 20, 30, 40};
    handler.writeToJsonFile("data.json", data);

    // Beispiel: Daten aus der JSON-Datei lesen und im gewünschten Format anzeigen
    String result = handler.readFromJsonFile("data.json");
    System.out.println("Ausgelesene Werte: " + result);
  }
}
